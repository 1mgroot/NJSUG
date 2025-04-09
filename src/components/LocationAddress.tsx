import { MapPin } from "lucide-react";

interface LocationAddressProps {
  address: string;
  className?: string;
}

export function LocationAddress({ 
  address = "3141 US-22, Branchburg, NJ 08876", 
  className 
}: LocationAddressProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DAFFA9] text-black">
        <MapPin size={18} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wider text-white/70">Address</span>
        <span className="text-sm font-medium text-white">{address}</span>
      </div>
    </div>
  );
} 