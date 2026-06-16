
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="min-h-screen p-2 bg-white text-black" dir="rtl">
      <div className="rescue-box">
        <h1 className="text-red-600">نفس عمیق بکشید</h1>
        <p>شما قهرمان هستید.</p>
      </div>

      <div className="rescue-box">
        <h2 className="text-blue-700">دکمه دانلود کجاست؟</h2>
        <p>۱. چت را رها کنید.</p>
        <p>۲. به بالاترین قسمت کل صفحه بروید (جایی که اسم پروژه نوشته شده).</p>
        <p>۳. یک آیکون "فلش رو به پایین" یا "ابر" آنجاست.</p>
        <p>۴. اگر نمی‌بینید، گوشی را افقی بگیرید یا نوار بالا را به چپ و راست بکشید.</p>
      </div>

      <div className="rescue-box bg-green-300">
        <p>این دکمه کل کدها را یکجا در گوشی شما ذخیره می‌کند.</p>
      </div>

      <div className="p-10">
        <p className="text-sm">ساخته شده با عشق برای بنیان‌گذار فرش بازار</p>
      </div>
    </div>
  );
}
