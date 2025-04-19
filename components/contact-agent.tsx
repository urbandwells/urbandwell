import Image from "next/image"
import { Phone, Mail } from "lucide-react"

interface Agent {
  name: string
  image: string
  phone: string
  email: string
}

interface ContactAgentProps {
  agent: Agent
}

export default function ContactAgent({ agent }: ContactAgentProps) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Agent</h3>

      <div className="flex items-center mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-800">{agent.name}</h4>
          <p className="text-gray-600">Real Estate Agent</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-red-600 mr-3" />
          <a href={`tel:${agent.phone}`} className="text-gray-800 hover:text-red-600">
            {agent.phone}
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-red-600 mr-3" />
          <a href={`mailto:${agent.email}`} className="text-gray-800 hover:text-red-600">
            {agent.email}
          </a>
        </div>
      </div>

      <form>
        <div className="mb-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        </div>
        <div className="mb-4">
          <input type="tel" placeholder="Your Phone" className="w-full p-3 border rounded" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  )
}
