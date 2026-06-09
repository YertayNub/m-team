import React from 'react';

export default function VideoReviews() {
  const reviews = [
    {
      id: 1,
      title: "Отзыв о продукции M International",
      description: "Реальные результаты применения продуктов клеточного питания.",
      youtubeId: "Xc_hfjNKCpk", // ЗАМЕНИТЕ ЭТОТ КОД НА ID ВАШЕГО ВИДЕО С YOUTUBE
    }
  ];

  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', color: '#333', marginBottom: '10px' }}>
          Видеоотзывы наших клиентов
        </h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Посмотрите реальную историю применения продукции M International
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {reviews.map((review) => (
            <div key={review.id} style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src={`https://www.youtube.com/embed/${review.youtubeId}`}
                  title={review.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '20px', color: '#222', marginBottom: '8px', marginTop: '0' }}>
                  {review.title}
                </h3>
                <p style={{ color: '#555', fontSize: '14px', margin: '0', lineHeight: '1.5' }}>
                  {review.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
