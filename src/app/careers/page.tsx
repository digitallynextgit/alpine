import CareerHero from "@/components/CareerHero"
import WhyAlpine from "@/components/WhyAlpine"
import CurrentOpenings from "@/components/CurrentOpenings"
import Commitments from "@/components/Commitments"

const page = () => {
  return (
    <>
      <CareerHero />
      <CurrentOpenings/>
      <WhyAlpine/>
      <Commitments/>
    </>
  )
}

export default page