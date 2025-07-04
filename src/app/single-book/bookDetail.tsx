import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface BookDetailProps {
  data: {
    title: string
    author: string
    genre: string
    isbn: string
    copies: number
    available: boolean
    description: string
  }
}

export const BookDetail = ({ data }: BookDetailProps) => {
  const {
    title,
    author,
    genre,
    isbn,
    copies,
    available,
    description,
  } = data

  return (
    <Card className="max-w-2xl mx-auto shadow-md mt-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">by {author}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap justify-between gap-4">
          <Detail label="Genre" value={genre} />
          <Detail label="ISBN" value={isbn} />
          <Detail label="Copies" value={copies.toString()} />
          <Detail
            label="Availability"
            value={
              available ? (
                <Badge variant="default" className="bg-green-600">Available</Badge>
              ) : (
                <Badge variant="destructive">Unavailable</Badge>
              )
            }
          />
        </div>

        <Separator />

        <div>
          <p className="text-sm text-muted-foreground mb-1">Description</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const Detail = ({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) => (
  <div className="space-y-1">
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
)
