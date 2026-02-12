# رفع المشروع على GitHub ثم Vercel

## الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى https://github.com
2. سجل دخول أو أنشئ حساب
3. اضغط على "+" في الأعلى ثم "New repository"
4. اكتب اسم المشروع (مثل: bait-alahsa)
5. اضغط "Create repository"

## الخطوة 2: رفع المشروع من Terminal

افتح Terminal في مجلد المشروع واكتب:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

استبدل `YOUR_USERNAME` باسم المستخدم و `YOUR_REPO_NAME` باسم المشروع

## الخطوة 3: ربط Vercel بـ GitHub

1. اذهب إلى https://vercel.com
2. سجل دخول باستخدام GitHub
3. اضغط "Add New" → "Project"
4. اختر المشروع من القائمة
5. اضغط "Import"
6. اضغط "Deploy"

## تحديث المشروع لاحقاً

```bash
git add .
git commit -m "update"
git push
```

Vercel سيقوم بالنشر تلقائياً عند كل push!
