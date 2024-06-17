import { DecorationDesktop, DecorationMobile } from "./decoration"

const HistorySection = () => {
  return (
    <section className="relative w-full h-auto py-16 lg:py-20 lg:mt-[40px] flex items-center justify-start">
      <div className="relative w-full lg:w-[50vw] flex flex-col gap-4 text-center lg:text-left px-8 lg:pl-24">
        <div className="absolute lg:-left-0 lg:top-0 -top-16 left-1/2 -translate-x-1/2 bg-beeYellow-secondary lg:rounded-r-full rounded-b-full lg:h-[6vh] lg:w-[6vw] h-10 w-10" />
        <h1 className="text-4xl text-beeYellow-secondary font-bold">
          A nossa história
        </h1>
        <p className="text-white text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo
          possimus natus facere dolorum dolorem velit dignissimos minus eveniet
          tempore beatae accusamus molestiae corrupti officia, adipisci
          consectetur illum dicta ad, sint magni. Quam accusamus voluptatum
          voluptas id facere officiis accusantium
        </p>
        <p className="text-white text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet
          animi maiores iusto? Debitis excepturi laboriosam nihil dolorum
          provident maxime maiores ex neque quos voluptate delectus quasi id in
          eos optio assumenda, inventore dolor, unde similique corporis vero
          voluptatibus atque.
        </p>
      </div>

      <DecorationDesktop />
      <DecorationMobile />
    </section>
  )
}

export default HistorySection
