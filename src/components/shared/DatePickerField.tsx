import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Controller } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface Props {
  name: string
  control: any
  label: string
  description?: string
  placeholder?: string
  rules?: any
}

export const DatePickerField = ({
  name,
  control,
  label,
  description,
  placeholder = "Pick a date",
  rules,
}: Props) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? format(field.value, "PPP") : <span>{placeholder}</span>}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              autoFocus
            />
          </PopoverContent>
        </Popover>
        {description && <FormDescription>{description}</FormDescription>}
        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
      </FormItem>
    )}
  />
)
