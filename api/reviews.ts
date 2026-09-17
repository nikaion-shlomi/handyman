const PLACE_ID = 'ChIJ6bdAvBcf1oERGR_3uPKiVys';
const FIELDS = 'rating,userRatingCount,googleMapsUri,reviews';

type GoogleReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string };
  relativePublishTimeDescription?: string;
};

type GooglePlace = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

const json = (body: unknown, status: number, cache: string) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': cache },
  });

export async function GET(request: Request) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return json({ configured: false }, 503, 'no-store');

  const lang = new URL(request.url).searchParams.get('lang') === 'en' ? 'en' : 'he';
  const upstream = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=${lang}`,
    { headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': FIELDS } },
  );
  if (!upstream.ok) return json({ error: upstream.status }, 502, 'no-store');

  const place = (await upstream.json()) as GooglePlace;
  const reviews = (place.reviews ?? [])
    .map((review) => ({
      rating: Math.round(review.rating ?? 0),
      text: review.text?.text ?? review.originalText?.text ?? '',
      author: review.authorAttribution?.displayName ?? '',
      authorUri: review.authorAttribution?.uri ?? '',
      when: review.relativePublishTimeDescription ?? '',
    }))
    .filter((review) => review.text !== '');

  return json(
    {
      rating: place.rating ?? null,
      count: place.userRatingCount ?? 0,
      uri: place.googleMapsUri ?? '',
      reviews,
    },
    200,
    'public, s-maxage=21600, stale-while-revalidate=86400',
  );
}
