'use client';

import { useState } from 'react';
import Icon from './Icon';

// Mockup form: confirms on screen only. Wire to the client's email tool later.
export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="newsletter__done" role="status">
        <Icon name="check" size={18} />
        You're on the list. Watch your inbox for new bikes and sale dates.
      </p>
    );
  }

  return (
    <form
      className="newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor="newsletter-email" className="newsletter__label">
        Get new bikes and sale dates by email
      </label>
      <div className="newsletter__row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
        <button type="submit" className="btn btn--dark newsletter__btn">
          Sign up
        </button>
      </div>
    </form>
  );
}
