# তেল-তরী ল্যান্ডিং পেজ — সেটআপ গাইড

## ফাইল কী কাজ করে
- `index.html` — ল্যান্ডিং পেজ (অর্ডার ফর্ম + "আমার অর্ডার")
- `admin.html` — অ্যাডমিন প্যানেল (লিংক: `আপনার-সাইট/admin.html`)
- `js/config.js` — WhatsApp নম্বর, দাম, Firebase কনফিগ (এখানেই সব পরিবর্তন)
- `firestore.rules` — ডেটাবেস সিকিউরিটি (কে কী দেখতে পারবে)
- `images/product.png` — নিজের প্রোডাক্ট ছবি দিলে (নাম হুবহু `product.png`) বোতলের ড্রয়িংয়ের জায়গায় সেটি দেখাবে

## ধাপ ১: GitHub Pages-এ পাবলিশ (এটুকুতেই পেজ ও WhatsApp অর্ডার চালু)
1. GitHub-এ নতুন repository খুলুন → ZIP-এর সব ফাইল আপলোড করুন (ফোল্ডারসহ, `index.html` যেন সবার উপরের লেভেলে থাকে)।
2. Settings → Pages → Branch: `main` / `(root)` → Save।
3. কয়েক মিনিট পর `https://আপনার-নাম.github.io/repo-নাম/` এ পেজ চালু।

## ধাপ ২: অ্যাডমিন প্যানেল ও "আমার অর্ডার" চালু করতে Firebase (ফ্রি)
GitHub Pages-এ সার্ভার নেই, তাই সব ডিভাইসের অর্ডার জমা রাখতে Firebase দরকার। Firebase ছাড়া অর্ডার শুধু WhatsApp-এ যাবে এবং অ্যাডমিন প্যানেল কেবল "ডেমো মোডে" ওই ব্রাউজারের অর্ডার দেখাবে।
1. console.firebase.google.com → Add project।
2. Build → **Authentication** → Get started → Sign-in method-এ **Anonymous** ও **Email/Password** দুটোই Enable করুন।
3. Authentication → Users → **Add user** → নিজের ইমেইল ও পাসওয়ার্ড দিন → তৈরি হলে **User UID** কপি করুন।
4. Build → **Firestore Database** → Create database (Production mode; লোকেশন asia-south1 বা asia-southeast1)।
5. Firestore → **Rules** ট্যাবে `firestore.rules`-এর পুরো লেখা বসান, `এখানে_অ্যাডমিন_UID_বসান` এর জায়গায় ধাপ ৩-এর UID বসান → Publish।
6. Project settings (গিয়ার) → Your apps → **Web (</>)** → অ্যাপ রেজিস্টার করলে `apiKey, authDomain, projectId, appId` পাবেন → `js/config.js`-এর `firebase:{...}` এ বসান → GitHub-এ আবার আপলোড।
7. Authentication → Settings → Authorized domains-এ `আপনার-নাম.github.io` যোগ করুন।
8. `আপনার-সাইট/admin.html` এ ধাপ ৩-এর ইমেইল/পাসওয়ার্ড দিয়ে লগইন করুন।

## কে কী দেখতে পারে
- ক্রেতা: প্রথম অর্ডারের সময় ব্রাউজারে অদৃশ্য (anonymous) আইডি তৈরি হয়; সিকিউরিটি রুলস অনুযায়ী সে শুধু সেই আইডির অর্ডার দেখতে পায়। ব্রাউজারের ডেটা মুছলে বা অন্য ফোন থেকে দেখলে আগের অর্ডার দেখা যাবে না — তখন WhatsApp-এ যোগাযোগ করতে হবে।
- অ্যাডমিন: শুধু আপনার UID-এর অ্যাকাউন্ট সব অর্ডার দেখতে, স্ট্যাটাস বদলাতে ও মুছতে পারে।

## লোকালি দেখা
`index.html` ডাবল-ক্লিক করলেই খোলে (ডেমো মোডে)। ফন্ট ইন্টারনেট থেকে আসে।

---
## নতুন ডিজাইন (নারকেল তেল) — জরুরি সেটিং, `js/config.js`-এ
- `unitPrice` — **নারকেল তেলের সঠিক দাম বসান** (এখন ৯৫০ রাখা আছে)।
- `messenger` — মেসেঞ্জার ইউজারনেম/আইডি বসান (যেমনঃ `teltori.bd` → `m.me/teltori.bd`)। ফাঁকা থাকলে মেসেঞ্জার বাটন লুকানো থাকে।
- অর্ডার কনফার্ম করলে ক্রেতা নিজের অর্ডারের বিবরণ দেখে, ৩.৫ সেকেন্ড পর WhatsApp খোলে। মেসেঞ্জার বাটনে চাপলে অর্ডারের লেখা কপি হয় — মেসেঞ্জারে পেস্ট করলেই হবে।
- ছবি বদলাতে `images/product.jpg` (মূল ছবি) ও `c1.jpg, c2.jpg, c3.jpg` (কার্ডের ছবি) পাল্টান।
