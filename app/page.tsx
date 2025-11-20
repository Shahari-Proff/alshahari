'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Monitor, PenTool, Wrench, Mail, ExternalLink, FileText, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              م
            </div>
            <span>ابراهيم محمد </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-bold" asChild>
              <Link href="#services">الخدمات</Link>
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-bold" asChild>
              <Link href="#portfolio">أعمالي</Link>
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-bold" asChild>
              <Link href="#about">من أنا</Link>
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-bold" asChild>
              <Link href="#contact">تواصل معي</Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold" asChild>
              <Link href="https://i.postimg.cc/cJSDdXBf/Ibrahim-Mohammed-Ali-CV-2021-06-08.png" target="_blank" rel="noopener noreferrer">السيرة الذاتية</Link>
            </Button>
          </nav>
          <div className="hidden md:block">
             <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="#contact">اطلب خدمتك</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-background p-4 space-y-4 absolute w-full shadow-lg">
            <nav className="flex flex-col gap-2">
              <Link 
                href="#services" 
                className="p-2 text-primary hover:bg-primary/10 rounded-md font-bold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link 
                href="#portfolio" 
                className="p-2 text-primary hover:bg-primary/10 rounded-md font-bold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                أعمالي
              </Link>
              <Link 
                href="#about" 
                className="p-2 text-primary hover:bg-primary/10 rounded-md font-bold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من أنا
              </Link>
              <Link 
                href="#contact" 
                className="p-2 text-primary hover:bg-primary/10 rounded-md font-bold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معي
              </Link>
              <Link 
                href="https://i.postimg.cc/cJSDdXBf/Ibrahim-Mohammed-Ali-CV-2021-06-08.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-primary hover:bg-primary/10 rounded-md font-bold transition-colors border border-primary/30 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                السيرة الذاتية
              </Link>
              <Link 
                href="#contact"
                className="p-2 bg-primary text-primary-foreground rounded-md font-bold text-center hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اطلب خدمتك
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 space-y-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-right">
            <Badge variant="secondary" className="px-4 py-1 text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none">
              متاح للعمل الحر
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              أصمّم لك <span className="text-primary">صفحة شخصية</span> تعكس هويتك وتزيد فرص وصولك للعملاء
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-[600px] md:mx-0 mx-auto leading-relaxed">
              خدمات احترافية في تصميم الصفحات الشخصية، إدارة المحتوى، وصيانة الحاسوب، مع دعم فني متواصل لضمان راحتك ونجاحك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="text-lg px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="#portfolio">تصفح أعمالي</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link href="#contact">تواصل معي</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-primary/30 shadow-2xl">
              <Image
                src="/images/design-mode/Chat_GPT_Image_17_نوفمبر_2025_07_46_52_م(1).png"
                alt="صورة شخصية لابراهيم محمد"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 280px, 400px"
                quality={90}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">خدماتي</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              أقدم مجموعة من الخدمات التقنية والإبداعية لمساعدتك على الظهور بأفضل صورة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Monitor className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">تصميم الصفحات الشخصية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground/70 leading-relaxed">
                  تصميم مواقع شخصية (Portfolio) عصرية وجذابة تعرض مهاراتك وأعمالك بطريقة احترافية تجذب العملاء.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href="#contact">اطلب الخدمة &larr;</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <PenTool className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">إدارة المحتوى</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground/70 leading-relaxed">
                  تحديث وإدارة محتوى موقعك بشكل دوري لضمان بقائه نشطاً ومواكباً لأحدث التطورات في مجالك.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href="#contact">اطلب الخدمة &larr;</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Wrench className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">صيانة الحاسوب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground/70 leading-relaxed">
                  حلول تقنية وصيانة لأجهزة الحاسوب لضمان عملها بكفاءة عالية، مع تقديم استشارات تقنية.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href="#contact">اطلب الخدمة &larr;</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">أعمال سابقة</h2>
              <p className="text-foreground/70 max-w-2xl">
                نماذج من مشاريع قمت بتنفيذها مؤخراً وحققت نتائج مميزة
              </p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">عرض كل الأعمال</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-all">
              <Link href="https://albait-aljaded.vercel.app/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/modern-real-estate-website.png"
                    alt="مشروع البيت الجديد"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
              </Link>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-card-foreground">
                      <Link href="https://albait-aljaded.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        البيت الجديد
                      </Link>
                    </h3>
                    <p className="text-sm text-card-foreground/60">تصميم واجهة المستخدم • تطوير الويب</p>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 hover:text-primary" asChild>
                    <Link href="https://albait-aljaded.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <p className="text-card-foreground/70 text-sm leading-relaxed">
                  موقع عقاري متكامل يعرض العقارات بطريقة احترافية مع واجهة مستخدم سهلة وجذابة.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-all">
              <Link href="https://alam-almadhalat.vercel.app/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/elegant-tent-rental-website.jpg"
                    alt="مشروع عالم المظلات"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
              </Link>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-card-foreground">
                      <Link href="https://alam-almadhalat.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        عالم المظلات
                      </Link>
                    </h3>
                    <p className="text-sm text-card-foreground/60">تصميم واجهة المستخدم • تطوير الويب</p>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 hover:text-primary" asChild>
                    <Link href="https://alam-almadhalat.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <p className="text-card-foreground/70 text-sm leading-relaxed">
                  موقع لعرض خدمات تأجير المظلات والفعاليات بتصميم أنيق وعصري يعكس احترافية الخدمة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="about" className="bg-secondary/30 rounded-3xl p-8 md:p-12 lg:p-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">نبذة عني</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                أعمل في مجال التصميم والتطوير منذ أكثر من 5 سنوات. شغفي هو تحويل الأفكار إلى واقع رقمي ملموس يساعد الأشخاص والشركات على النمو.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-bold text-xl mb-2 text-primary">5+</h4>
                  <p className="text-foreground/70">سنوات خبرة</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-primary">50+</h4>
                  <p className="text-foreground/70">مشروع ناجح</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-primary">24/7</h4>
                  <p className="text-foreground/70">دعم فني</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-primary">100%</h4>
                  <p className="text-foreground/70">رضا العملاء</p>
                </div>
              </div>
              <div className="pt-6">
                <h4 className="font-bold mb-4">الأدوات التي أستخدمها:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "React", "Next.js", "Tailwind CSS", "WordPress", "Photoshop"].map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-card text-card-foreground border-primary/30 px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 bg-card p-8 rounded-2xl shadow-xl max-w-md mx-auto">
                <h3 className="font-bold text-xl mb-4 text-card-foreground">لماذا تختارني؟</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">✓</div>
                    <p className="text-sm text-card-foreground/70">التزام تام بالمواعيد وتسليم عالي الجودة</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">✓</div>
                    <p className="text-sm text-card-foreground/70">تصاميم عصرية متجاوبة مع جميع الشاشات</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">✓</div>
                    <p className="text-sm text-card-foreground/70">دعم فني مستمر بعد تسليم المشروع</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">✓</div>
                    <p className="text-sm text-card-foreground/70">أسعار تنافسية وباقات مرنة</p>
                  </li>
                </ul>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-0 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full -z-0 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto scroll-mt-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">تواصل معي</h2>
            <p className="text-foreground/70">
              هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Link href="https://wa.me/966537239102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">WhatsApp</h3>
                  <p className="text-sm text-card-foreground/60" dir="ltr">+966 53 723 9102</p>
                </div>
              </Link>

              <Link href="https://x.com/EbrahimShahari?t=4q3JMhyBfSJaw0OE6Baw8A&s=08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">X (تويتر)</h3>
                  <p className="text-sm text-card-foreground/60">@EbrahimShahari</p>
                </div>
              </Link>

              <Link href="https://www.facebook.com/share/1FMBdyb4FS/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">فيسبوك</h3>
                  <p className="text-sm text-card-foreground/60">إبراهيم شهاري</p>
                </div>
              </Link>

              
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-card-foreground">أرسل بريد إلكتروني</CardTitle>
                <CardDescription className="text-card-foreground/60">املأ النموذج وسيتم فتح تطبيق البريد الإلكتروني</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  const mailtoLink = `mailto:shahariproff335@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`من: ${email}\n\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">بريدك الإلكتروني</label>
                    <Input id="email" name="email" type="email" placeholder="name@example.com" required className="bg-input text-card-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-card-foreground">الموضوع</label>
                    <Input id="subject" name="subject" placeholder="عنوان الرسالة" required className="bg-input text-card-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">الرسالة</label>
                    <Textarea id="message" name="message" placeholder="كيف يمكنني مساعدتك؟" className="min-h-[120px] bg-input text-card-foreground" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="w-4 h-4 ml-2" />
                    فتح تطبيق البريد
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                م
              </div>
              <span>ابراهيم محمد </span>
            </div>
            <div className="flex gap-6">
              <Link href="https://wa.me/966537239102" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://x.com/EbrahimShahari?t=4q3JMhyBfSJaw0OE6Baw8A&s=08" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="sr-only">X</span>
              </Link>
              <Link href="https://www.facebook.com/share/1FMBdyb4FS/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:shahariproff335@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-sm text-foreground/60">
              © 2025 جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
