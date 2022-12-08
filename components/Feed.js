import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'

export default function Feed() {
  const { data: session } = useSession()
  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'
          : 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'
      } `}
    >
      <section className="md:col-span-2">
        {/* Stories */}

        <Stories />

        {/* Posts */}

        <Posts />
      </section>
      <section className="hidden md:inline-grid">
        <div className="fixed w-[380px]">
          {/* Mini profile */}

          <MiniProfile />

          {/* Suggestion */}

          <Suggestions />
        </div>
      </section>
    </main>
  )
}

// md 사이즈 일때 grid-cols-3 인데, 스토리 섹션에서 2만큼을 가져간다고 한 것이다.(md:col-span-2)
// 나머지 1은 mini profile 섹션에서 가져간다
