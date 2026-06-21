# Lumière Boutique Hotel — project guide

## What this is
A hotel website **template**. It is one of the selectable template sites inside
the owner's platform **dijitalotelcilik.com** (a multi-tenant SaaS where each
hotel picks a template). Because it's a template, **content must come from data
files, never hardcoded** — each tenant customizes via data:
- `src/data/hotelInfo.js` — identity, contact, address, social, about, gallery,
  amenities, policies.
- `src/data/rooms.js` — room list; `getRoomBySlug(slug)` helper.

> The active project lives in **`lumiere-hotel/`**. A sibling `hotel-website/`
> directory is an OLD abandoned Zustand version — ignore it.

## Stack & architecture
- Vite + React 18 + react-router-dom v7 + date-fns + **plain CSS**.
- **NO external state libraries** — deliberately `useReducer` + custom hooks to
  learn React. Do not add Zustand/Redux.
- **URL = single source of truth** for booking state. The `useBookingState`
  hook (`src/hooks/useBookingState.js`) returns `{ state, dispatch }`:
  `initFromUrl()` lazily reads URL params; a `useEffect` writes state back via
  `setSearchParams({ replace: true })`. State: `{ checkIn, checkOut, adults,
  children }`. This is why search criteria thread across Home → Rooms →
  RoomDetail → Reservation without prop-drilling: every page reads the URL.
- Pages that only READ booking params (Reservation) use plain `useSearchParams`,
  NOT `useBookingState` — the hook's write-back would strip the `room` param.
- Data flows: **props down**, **events up** (`dispatch` / `onChange`), shared
  state in the URL. Shared UI (`BookingCalendar`, `GuestsSelector`) is stateless
  and takes `dispatch` + values as props.

## Conventions
- CSS: single-dash class prefixes (`.booking-search-field`), NOT BEM.
- Design tokens in `src/styles/tokens.css` — always `var(--...)` for colors,
  spacing, fonts, radius; never hardcode values. Sizes are `--text-*` (there is
  no `--font-*` size token), spacing `--space-*`, etc.
- Named exports for hooks/utils; default exports for components.
- Reuse existing components (e.g. `ImageCarousel`) and helpers (`formatPrice`,
  `getRoomBySlug`, calendar helpers) rather than rewriting.

## Status (pages)
Home, Rooms (in-place editable search + capacity filter), RoomDetail (booking
widget with calendar/guests/reserveTo), Reservation (read params → summary →
contact form → confirmation), About, Contact, ManageBooking — all implemented
and styled with tokens.

## How to work with the owner (IMPORTANT)
The owner is learning React by building and **writes ALL the code themselves,
CSS included**. Do NOT edit source files directly.
- Give the code to type, then wait for **"devam"** (continue) before the next
  step. One file / one concept (or one full page) per step — don't jump ahead.
- Explanations in **Turkish**, tied to the user scenario ("kullanıcı şunu yaptı
  → o zaman bu fonksiyon şunu çalıştırır"): explain both what the code does and
  the real behavior it produces, not dry syntax.
- The owner now grasps the data-flow / composition mental model — build on it;
  frame new features as "where does this data come from, where does it report
  changes?" rather than re-explaining basics.
