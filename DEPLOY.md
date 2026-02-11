# نشر الموقع على Vercel / Deploy to Vercel

## الخطوات / Steps:

### 1. إنشاء حساب Vercel
- اذهب إلى https://vercel.com
- سجل دخول باستخدام GitHub أو Google

### 2. رفع المشروع
اختر إحدى الطريقتين:

#### الطريقة الأولى: من خلال GitHub
1. ارفع المشروع إلى GitHub
2. في Vercel، اضغط "New Project"
3. اختر المشروع من GitHub
4. اضغط "Deploy"

#### الطريقة الثانية: من خلال Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### 3. إعدادات المشروع في Vercel
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 4. نشر التحديثات
```bash
vercel --prod
```

## ملاحظات مهمة:
- تأكد من رفع جميع الصور والفيديوهات في مجلد `assets/`
- الموقع سيكون متاح على رابط مثل: `your-project.vercel.app`
