
"use client";

import { PageHeader } from "@/components/shared/page-header";
import { ReservationForm } from "@/components/shared/reservation-form";

export default function ReservationsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Make a Reservation"
        subtitle="Book your table for an unforgettable dining experience. We look forward to welcoming you."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="restaurant reservation"
      />
      <div className="container mx-auto py-20">
        <div className="max-w-2xl mx-auto p-8 bg-card rounded-lg shadow-2xl animate-fade-in-up">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
