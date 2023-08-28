import Image from 'next/image'

function Author(props) {
  return (
    <div className={'flex space-x-4 items-center'}>
      <div
        className={'h-[40px] w-[40px] relative rounded-full overflow-hidden'}
      >
        <Image
          fill
          sizes={'50vw'}
          className={'object-cover'}
          src={'/assets/icons/logo-athletid-black.svg'}
          alt={''}
        />
      </div>
      <div className={`flex flex-col`}>
        <p className={`!text-lg`}>
          {props.author?.firstName + '  ' + props.author?.lastName}
        </p>
        <p>S&C Coach</p>
      </div>
    </div>
  )
}

export default Author
