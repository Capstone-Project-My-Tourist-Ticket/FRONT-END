import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Footer from "@/components/Footer"

function AddVoucher() {
  const [date, setDate] = React.useState<Date>()
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="text-2xl underline underline-offset-8 pb-6 font-bold">
            Add Voucher
          </div>
          <Input
            placeholder="Voucher Name"
            className="w-[500px] border border-black"
          />{" "}
          <br />
          <Input
            placeholder="Voucher Code"
            className="w-[500px] border border-black"
          />{" "}
          <br />
          <Textarea placeholder="Description" /> <br />
          <Input
            placeholder="Discount Value"
            type="number"
            className="w-[500px] border border-black"
          />{" "}
          <br />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal border border-black",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <div className="py-10">
            <button className="bg-black rounded-lg text-white w-[500px] p-2">
              Add
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddVoucher
