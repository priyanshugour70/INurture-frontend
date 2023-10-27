import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartFour from "@/components/Charts/ChartFour";
import ChartThree from "@/components/Charts/ChartThree";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chart Page | Next.js E-commerce Dashboard Template",
  description: "This is Chart Page for TailAdmin Next.js",
  // other metadata
};


const page = () => {
  return (
    <>
      <Breadcrumb pageName="Monthly Planner" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>

        <ChartThree />
        {/* Do Some Thing Outoff Chart */}
      </div>
    </>
  )
}

export default page