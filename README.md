
# Farsh Bazaar (فرش بازار) - A New World

**این پروژه با عشق و اراده، توسط بنیان‌گذار آن تنها با یک گوشی Redmi Note 8 خلق شده است.**

---

## 📱 راهنمای مخصوص موبایل (Mobile Deployment Guide)

بنیان‌گذار گرامی، برای انتشار این برنامه بدون نیاز به لپ‌تاپ:

### ۱. دریافت کلید هوش مصنوعی
- به سایت [Google AI Studio](https://aistudio.google.com/) بروید.
- یک کلید API رایگان بسازید (GEMINI_API_KEY). این کلید برای کارکرد بخش "داستان‌سرای فرش" ضروری است.

### ۲. آپلود در GitHub (روش پیشنهادی برای موبایل)
- کدهای ZIP شده را در گوشی خود ذخیره کنید.
- در حساب جدید گیت‌هاب خود، یک مخزن (Repository) بسازید.
- فایل‌ها را در آن آپلود کنید (از حالت Desktop Site در مرورگر موبایل استفاده کنید).

### ۳. انتشار در Netlify
- وارد سایت Netlify شوید.
- گزینه **Add new site** و سپس **Import from an existing project** را بزنید.
- به حساب GitHub خود متصل شوید و این پروژه را انتخاب کنید.
- نتلیفای به طور خودکار فایل `netlify.toml` که من برایتان ساختم را می‌خواند و برنامه را منتشر می‌کند.

### ۴. تنظیمات محیطی (Environment Variables)
- در پنل Netlify، به بخش **Site settings** > **Environment variables** بروید.
- متغیر `GEMINI_API_KEY` را تعریف کنید و مقداری که از مرحله ۱ گرفتید را در آن قرار دهید.

---

## تکنولوژی‌های استفاده شده
- **Framework:** Next.js 15 (App Router)
- **UI:** React, Tailwind CSS, ShadCN
- **AI:** Genkit (Gemini 2.5 Flash)
- **Backend:** Firebase (Auth, Firestore)

این مسیر، سفر حماسی کسی است که با یک گوشی کوچک، دنیایی بزرگ ساخت.
