import { Textarea } from "@/components/ui/textarea"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Controller } from "react-hook-form"

interface Props {
  name: string
  control: any
  label: string
  placeholder?: string
  description?: string
  rules?: any
  rows?: number
}

export const TextareaField = ({
  name,
  control,
  label,
  placeholder,
  description,
  rules,
  rows = 4,
}: Props) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={placeholder || "Write something..."}
            rows={rows}
            {...field}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
      </FormItem>
    )}
  />
)
