'use client'

import React from 'react'
import { MitraDashboardLayout } from '@/components/dashboard'

export default function ReviewsPage() {
  return (
    <MitraDashboardLayout 
      title="Ulasan" 
      subtitle="Lihat dan kelola ulasan dari pelanggan"
    >
      <div className="bg-white rounded-lg border border-base-200 p-8">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-base-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-base-900">Halaman Ulasan</h3>
          <p className="mt-1 text-sm text-base-500">
            Fitur manajemen ulasan akan segera tersedia
          </p>
        </div>
      </div>
    </MitraDashboardLayout>
  )
}