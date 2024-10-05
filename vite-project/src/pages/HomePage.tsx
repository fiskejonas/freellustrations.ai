import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-2xl font-bold tracking-tighter">Home Page</h1>
      <div>
        <h2 className='font-bold text-6xl tracking-tighter'>
          Popular
        </h2>
      </div>
    </div>
  )
}

export default HomePage
