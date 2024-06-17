const DecorationDesktop = () => {
  return (
    <div className="bg-beeYellow-secondary top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center h-[50vh] rounded-l-full w-[45vw] absolute right-0 gap-3 flex-col text-6xl font-bold text-beeBlack-secondary">
      <p>A criar Buzz</p>
      <p>há 30 anos.</p>
    </div>
  )
}

const DecorationMobile = () => {
  return (
    <div className="bg-beeYellow-secondary w-[60vw] h-[6vh] -bottom-2 left-1/2 -translate-x-1/2 lg:hidden flex items-center justify-center rounded-full  absolute flex-col text-base font-semibold text-beeBlack-secondary text-center">
      <p className="w-full px-4">A criar buzz há 30 anos.</p>
    </div>
  )
}

export { DecorationDesktop, DecorationMobile }
