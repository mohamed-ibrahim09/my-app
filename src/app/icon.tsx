import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090B',
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            transform: 'rotate(45deg)',
            border: '3px solid #7C3AED',
            boxShadow: '0 0 24px rgba(124,58,237,0.35)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}

