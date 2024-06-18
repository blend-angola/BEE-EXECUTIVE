const DecorationDesktop = () => {
  return (
    <div className="bg-beeYellow-secondary top-1/2 hidden -translate-y-1/2 lg:flex items-center justify-center h-[60vh] rounded-l-full w-[45vw] absolute right-0 gap-3 flex-col text-6xl font-bold text-beeBlack-secondary">
      <p>A criar Buzz</p>
      <p>há 30 anos.</p>
    </div>
  )
}

const DecorationMobile = () => {
  return (
    <div className="bg-beeYellow-secondary w-[60vw] h-[6vh] lg:hidden flex items-center justify-center rounded-full flex-col text-base font-semibold text-beeBlack-secondary text-center">
      <p className="w-full px-4">A criar buzz há 30 anos.</p>
    </div>
  )
}

export { DecorationDesktop, DecorationMobile }
