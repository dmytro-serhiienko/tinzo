"use client";

import { useState } from "react";
import css from "./Modal.module.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your booking request has been sent.");
    onClose();
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          &times;
        </button>

        <h2>BOOKING REQUEST</h2>
        <form onSubmit={handleSubmit} className={css.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Event Details (Date, Location, Format, etc.)"
            rows={4}
            required
          ></textarea>
          <button type="submit" className={css.submitBtn}>
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
}
