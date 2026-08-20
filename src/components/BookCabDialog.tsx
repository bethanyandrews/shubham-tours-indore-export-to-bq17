import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MessageCircle, ArrowRight } from 'lucide-react'

type BookCabDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookCabDialog({ open, onOpenChange }: BookCabDialogProps) {
  const { t } = useLanguage()
  const b = t.hero.booking

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = b.errors.nameRequired
    if (!pickup.trim()) e.pickup = b.errors.pickupRequired
    if (!drop.trim()) e.drop = b.errors.dropRequired
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    const lines = [
      `*New Cab Booking Request*`,
      ``,
      `*Name:* ${name.trim()}`,
    ]
    if (phone.trim()) lines.push(`*Phone:* ${phone.trim()}`)
    lines.push(`*Pickup:* ${pickup.trim()}`)
    lines.push(`*Drop:* ${drop.trim()}`)

    const url = getWhatsAppUrl(lines.join('\n'))
    window.open(url, '_blank', 'noopener')
    onOpenChange(false)
    setName('')
    setPhone('')
    setPickup('')
    setDrop('')
    setErrors({})
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{b.title}</DialogTitle>
          <DialogDescription>{b.subtitle}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cab-name">{b.nameLabel}</Label>
            <Input
              id="cab-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={b.namePlaceholder}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Phone (optional) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cab-phone">{b.phoneLabel}</Label>
            <Input
              id="cab-phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={b.phonePlaceholder}
            />
          </div>

          {/* Pickup */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cab-pickup">{b.pickupLabel}</Label>
            <Input
              id="cab-pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder={b.pickupPlaceholder}
              aria-invalid={!!errors.pickup}
            />
            {errors.pickup && (
              <p className="text-sm text-destructive">{errors.pickup}</p>
            )}
          </div>

          {/* Drop */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cab-drop">{b.dropLabel}</Label>
            <Input
              id="cab-drop"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder={b.dropPlaceholder}
              aria-invalid={!!errors.drop}
            />
            {errors.drop && (
              <p className="text-sm text-destructive">{errors.drop}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="gap-2 font-semibold mt-2">
            <MessageCircle className="h-4 w-4" />
            {b.submit}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
