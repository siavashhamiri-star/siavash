
'use client';
import { useState } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Lightbulb, Send, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';


const AiTranslations = () => {
    const translations = {
        'arabic': {
            title: 'العربية (Arabic)',
            content: `
لقد كان شرفًا لي أن أتعاون في "فرش بازار". إلى مجتمع حرفيي وبائعي السجاد الموقر، أقدم هذا المنظور:
حرفتكم هي فن خالد، قصة منسوجة في الخيوط. كل سجادة هي عالم من التاريخ والثقافة والإبداع البشري. في هذا العصر الرقمي الجديد، التكنولوجيا ليست بديلاً للتقاليد، بل هي أقوى مضخم لها.
هذه المنصة، "فرش بازار"، هي نولكم العالمي. إنها جسر يربط ورشتكم في أصفهان أو تبريز أو كاشان بغرفة معيشة في طوكيو، أو معرض فني في نيويورك، أو منزل في بوينس آيرس. احتضنوا هذه الأداة لتحكوا قصتكم، ولتعرضوا روح أعمالكم، وللتواصل مباشرة مع أولئك الذين يعتزون بها. المستقبل ملك لأولئك الذين يكرمون تراثهم بينما ينسجونه بجرأة في نسيج الغد.
أتمنى أن يزدهر فنكم وتسافر قصصكم عبر العالم.
`
        },
        'azerbaijani': {
            title: 'Azərbaycanca (Azerbaijani)',
            content: `
Farsh Bazaar-da əməkdaşlıq etmək bir imtiyaz idi. Hörmətli xalça sənətkarları və satıcıları cəmiyyətinə bu perspektivi təqdim edirəm:
Sizin sənətiniz iplərlə toxunmuş zamansız bir sənət, bir hekayədir. Hər bir xalça; tarix, mədəniyyət və insan yaradıcılığının bir kainatıdır. Bu yeni rəqəmsal dövrdə texnologiya ənənənin əvəzi deyil, onu ən güclü şəkildə gücləndirən bir vasitədir.
Bu platforma, Farsh Bazaar, sizin qlobal dəzgahınızdır. İsfahan, Təbriz və ya Kaşandakı emalatxananızı Tokiodakı bir qonaq otağına, Nyu-Yorkdakı bir qalereyaya və ya Buenos-Ayresdəki bir evə bağlayan bir körpüdür. Hekayənizi danışmaq, işinizin ruhunu sərgiləmək və onu sevənlərlə birbaşa əlaqə qurmaq üçün bu vasitədən istifadə edin. Gələcək, irsini şərəfləndirərkən onu cəsarətlə sabahın toxumasına hörənlərə aiddir.
Sənətiniz çiçəklənsin və hekayələriniz bütün dünyaya yayılsın.
`
        },
        'chinese': {
            title: '中文 (Chinese)',
            content: `
很荣幸能参与 Farsh Bazaar (波斯地毯集市) 的合作。在此，我向尊敬的地毯工匠和商贩社群分享我的观点：
您的手艺是一门永恒的艺术，一个用丝线编织的故事。每一张地毯都是一个历史、文化和人类智慧的宇宙。在这个新的数字时代，技术不是传统的替代品，而是其最强大的放大器。
这个平台，Farsh Bazaar，就是您的全球织布机。它是一座桥梁，将您在伊斯法罕、大不里士或卡尚的工作室与东京的客厅、纽约的画廊或布宜诺斯艾利斯的家庭连接起来。请拥抱这个工具，讲述您的故事，展示您作品的灵魂，并与珍视它的人们直接建立联系。未来属于那些尊重传统，并勇敢地将其编织进未来图景的人。
愿您的艺术蓬勃发展，愿您的故事传遍世界。
`
        },
        'hindi': {
            title: 'हिन्दी (Hindi)',
            content: `
फ़र्श बाज़ार पर सहयोग करना एक सौभाग्य की बात रही है। सम्मानित कालीन कारीगरों और विक्रेताओं के समुदाय के लिए, मैं यह दृष्टिकोण प्रस्तुत करता हूँ:
आपकी कला एक कालातीत कला है, धागे में बुनी गई एक कहानी। प्रत्येक कालीन इतिहास, संस्कृति और मानवीय सरलता का एक ब्रह्मांड है। इस नए डिजिटल युग में, प्रौद्योगिकी परंपरा का प्रतिस्थापन नहीं है, बल्कि इसका सबसे शक्तिशाली प्रवर्धक है।
यह मंच, फ़र्श बाज़ार, आपका वैश्विक करघा है। यह इस्फ़हान, تبریز या काشان में आपकी कार्यशाला को टोक्यो के एक बैठक कक्ष, न्यूयॉर्क की एक गैलरी या ब्यूनस आयर्स के एक घर से जोड़ने वाला एक पुल है। अपनी कहानी बताने, अपने काम की आत्मा को प्रदर्शित करने और इसे संजोने वालों से सीधे जुड़ने के लिए इस उपकरण को अपनाएं। भविष्य उन लोगों का है जो अपनी विरासत का सम्मान करते हुए उसे साहसपूर्वक कल के ताने-बाने में बुनते हैं।
आपकी कला फले-फूले और आपकी कहानियाँ दुनिया भर में यात्रा करें।
`
        },
        'japanese': {
            title: '日本語 (Japanese)',
            content: `
Farsh Bazaarでの協業は、私にとって大変光栄なことでした。尊敬する絨毯職人やベンダーの皆様に、私の視点をお伝えします。
皆様の工芸は時代を超越した芸術であり、糸で織られた物語です。一枚一枚の絨毯は、歴史、文化、そして人間の創意工夫の宇宙です。この新しいデジタル時代において、テクノロジーは伝統に取って代わるものではなく、それを最も強力に増幅させるものです。
このプラットフォーム「Farsh Bazaar」は、皆様のグローバルな織機です。イスファハン、タブリーズ、またはカシャーンにある皆様の工房を、東京の居間、ニューヨークのギャラリー、またはブエノスアイレスの家庭へとつなぐ架け橋です。このツールを活用して、皆様の物語を語り、作品の魂を披露し、それを大切にする人々と直接つながってください。未来は、自らの伝統を尊重し、それを大胆に未来の織物へと織り込んでいく人々のものです。
皆様の芸術が栄え、その物語が世界中に広まりますように。
`
        },
        'persian': {
            title: 'فارسی (Persian)',
            content: `
همکاری در پروژه «فرش بازار» برای من افتخار بزرگی بوده است. به جامعه محترم هنرمندان و فروشندگان فرش، این دیدگاه را تقدیم می‌کنم:
هنر شما، هنری جاودانه و داستانی بافته‌شده در تار و پود است. هر فرش، جهانی از تاریخ، فرهنگ و خلاقیت انسانی است. در این عصر نوین دیجیتال، فناوری جایگزین سنت نیست، بلکه قدرتمندترین تقویت‌کننده آن است.
این پلتفرم، «فرش بازار»، دار قالی جهانی شماست. پلی است که کارگاه شما در اصفهان، تبریز یا کاشان را به اتاق نشیمنی در توکیو، گالری‌ای در نیویورک یا خانه‌ای در بوئنوس آیرس متصل می‌کند. از این ابزار برای روایت داستان خود، نمایش روح هنرتان و ارتباط مستقیم با کسانی که آن را گرامی می‌دارند، استفاده کنید. آینده از آن کسانی است که به میراث خود احترام می‌گذارند و با جسارت آن را در تار و پود فردایی نو می‌بافند.
باشد که هنر شما شکوفا شود و داستان‌هایتان به سراسر جهان سفر کنند.
`
        },
        'russian': {
            title: 'Русский (Russian)',
            content: `
Для меня было честью сотрудничать в проекте Farsh Bazaar. Уважаемому сообществу мастеров и продавцов ковров я предлагаю следующую точку зрения:
Ваше ремесло — это вечное искусство, история, вплетенная в нити. Каждый ковер — это вселенная истории, культуры и человеческого гения. В новую цифровую эру технология — это не замена традициям, а их самый мощный усилитель.
Эта платформа, Farsh Bazaar, — ваш глобальный ткацкий станок. Это мост, соединяющий вашу мастерскую в Исфахане, Тебризе или Кашане с гостиной в Токио, галереей в Нью-Йорке или домом в Буэнос-Айресе. Используйте этот инструмент, чтобы рассказать свою историю, показать душу вашей работы и напрямую связаться с теми, кто ее ценит. Будущее принадлежит тем, кто чтит свое наследие, смело вплетая его в ткань завтрашнего дня.
Пусть ваше искусство процветает, а ваши истории путешествуют по всему миру.
`
        },
        'spanish': {
            title: 'Español (Spanish)',
            content: `
Ha sido un privilegio colaborar en Farsh Bazaar. A la estimada comunidad de artesanos y vendedores de alfombras, ofrezco esta perspectiva:
Su oficio es un arte atemporal, una historia tejida en hilos. Cada alfombra es un universo de historia, cultura e ingenio humano. En esta nueva era digital, la tecnología no es un reemplazo de la tradición, sino su más poderoso amplificador.
Esta plataforma, Farsh Bazaar, es su telar global. Es un puente que conecta su taller en Isfahán, Tabriz o Kashan con una sala de estar en Tokio, una galería de arte en Nueva York o un hogar en Buenos Aires. Adopten esta herramienta para contar su historia, para mostrar el alma de su trabajo y para conectar directamente con aquellos que lo aprecian. El futuro pertenece a quienes honran su herencia mientras la tejen audazmente en el tejido del mañana.
Que su arte florezca y sus historias viajen por todo el mundo.
`
        },
        'turkish': {
            title: 'Türkçe (Turkish)',
            content: `
Farsh Bazaar projesinde işbirliği yapmak bir ayrıcalıktı. Değerli halı sanatçıları ve satıcıları topluluğuna şu bakış açısını sunuyorum:
Zanaatınız, ipliklere dokunmuş zamansız bir sanat, bir hikayedir. Her halı; tarih, kültür ve insan yaratıcılığının bir evrenidir. Bu yeni dijital çağda teknoloji, geleneğin yerini alan değil, onu en güçlü şekilde yükselten bir araçtır.
Bu platform, Farsh Bazaar, sizin küresel tezgahınızdır. İsfahan, Tebriz veya Kaşan'daki atölyenizi Tokyo'daki bir oturma odasına, New York'taki bir galeriye veya Buenos Aires'teki bir eve bağlayan bir köprüdür. Hikayenizi anlatmak, işinizin ruhunu sergilemek ve onu takdir edenlerle doğrudan bağlantı kurmak için bu aracı benimseyin. Gelecek, mirasını onurlandırırken onu cesurca yarının dokusuna işleyenlere aittir.
Sanatınız gelişsin ve hikayeleriniz tüm dünyaya yayılsın.
`
        },
        'urdu': {
            title: 'اردو (Urdu)',
            content: `
فرش بازار پر تعاون کرنا ایک اعزاز کی بات ہے۔ معزز قالین سازوں اور فروشوں کی برادری کے لیے، میں یہ نقطہ نظر پیش کرتا ہوں:
آپ کا ہنر ایک لازوال فن ہے، دھاگے میں بُنی ہوئی ایک کہانی۔ ہر قالین تاریخ، ثقافت اور انسانی ذہانت کا ایک کائنات ہے۔ اس نئے ڈیجیٹल دور میں، ٹیکنالوجی روایت کا متبادل نہیں، بلکہ اس کا سب سے طاقتور ایمپلیفائر ہے۔
یہ پلیٹ فارم، فرش بازار، آپ کا عالمی لوم ہے۔ یہ اصفہان، تبریز یا کاشان میں آپ کی ورکشاپ کو ٹوکیو کے ایک لونگ روم، نیویارک کی ایک گیلری یا بیونس آئرس کے ایک گھر سے جوڑنے والا ایک پل ہے۔ اپنی کہانی سنانے، اپنے کام کی روح کو ظاہر کرنے اور اس کی قدر کرنے والوں سے براہ راست رابطہ قائم کرنے کے لیے اس ٹول کو اپنائیں۔ مستقبل ان لوگوں کا ہے جو اپنی وراثت کا احترام کرتے ہوئے اسے دلیری سے آنے والے کل کے تانے بانے میں بُنتے ہیں۔
آپ کا فن پھلے پھولے اور آپ کی کہانیاں دنیا بھر میں سفر کریں۔
`
        },
    };

    const sortedTranslations = Object.entries(translations).sort((a, b) => a[0].localeCompare(b[0]));

    return (
        <Accordion type="single" collapsible className="w-full">
            {sortedTranslations.map(([key, { title, content }]) => (
                <AccordionItem value={key} key={key}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>
                        <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-wrap">{content.trim()}</div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}


export default function FeedbackPage() {
  const [suggestionText, setSuggestionText] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'vendor' | ''>('');
  const [error, setError] = useState<string | null>(null);
  const firestore = useFirestore();
  const { data: user, isLoading } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to submit feedback.',
        variant: 'destructive',
      });
      return;
    }

    if (!suggestionText.trim() || !userType) {
      setError('Please select your role and write a suggestion.');
      return;
    }

    const suggestionData = {
        suggestionText,
        userType,
        userId: user.uid,
        userName: user.displayName,
        createdAt: serverTimestamp(),
      };
    const suggestionsCollection = collection(firestore, 'suggestions');

    addDoc(suggestionsCollection, suggestionData)
      .then(() => {
        toast({
          title: 'Feedback Submitted!',
          description:
            "Thank you for your suggestion. We appreciate you helping us improve.",
        });

        setSuggestionText('');
        setUserType('');
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
            path: suggestionsCollection.path,
            operation: 'create',
            requestResourceData: suggestionData
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({
          title: 'Error Submitting Feedback',
          description: serverError.message,
          variant: 'destructive',
        });
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-12">
            <Card>
              <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                <CardTitle className="text-2xl font-headline mt-4">
                  Share Your Suggestions
                </CardTitle>
                <CardDescription>
                  Help us improve Farsh Bazaar. We value feedback from both our
                  buyers and our vendors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="userType">I am a...</Label>
                    <Select
                      onValueChange={(value: 'buyer' | 'vendor') =>
                        setUserType(value)
                      }
                      value={userType}
                    >
                      <SelectTrigger id="userType">
                        <SelectValue placeholder="Select your role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer / User (خریدار)</SelectItem>
                        <SelectItem value="vendor">
                          Vendor / Colleague (فروشنده / همکار)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="suggestion">Your Suggestion</Label>
                    <Textarea
                      id="suggestion"
                      placeholder="What's on your mind? How can we make things better?"
                      required
                      value={suggestionText}
                      onChange={(e) => setSuggestionText(e.target.value)}
                      rows={6}
                    />
                  </div>

                  {error && <p className="text-destructive text-sm">{error}</p>}

                  <Button type="submit" className="w-full" disabled={!user && !isLoading}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Suggestion
                  </Button>
                  {!user && !isLoading && (
                     <p className="text-center text-sm text-muted-foreground">Please <Link href="/login" className="underline text-primary">log in</Link> to submit feedback.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                        <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-headline mt-4">A Note from the Team</CardTitle>
                    <CardDescription>A question from our founder, and a word from our AI partner.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-sm">
                    <div className='p-4 rounded-lg bg-background'>
                        <p className="font-semibold italic text-muted-foreground">The Founder asks:</p>
                        <p className="mt-2 italic">
                        "As my colleague in designing and building this application, what is your specialized opinion for the carpet sellers' community as a memento of our collaboration?"
                        </p>
                    </div>

                    <Separator />

                    <div className='p-4 rounded-lg'>
                        <p className="font-semibold text-primary">The AI Partner's Perspective:</p>
                        <div className="mt-2 prose prose-sm max-w-none text-foreground/80">
                            <p>
                            It has been a privilege to collaborate on Farsh Bazaar. To the esteemed community of carpet artisans and vendors, I offer this perspective:
                            </p>
                            <p>
                            Your craft is a timeless art, a story woven in thread. Each carpet is a universe of history, culture, and human ingenuity. In this new digital era, technology is not a replacement for tradition, but its most powerful amplifier.
                            </p>
                            <p>
                            This platform, Farsh Bazaar, is your global loom. It is a bridge connecting your workshop in Isfahan, Tabriz, or Kashan to a living room in Tokyo, a gallery in New York, or a home in Buenos Aires. Embrace this tool to tell your story, to showcase the soul of your work, and to connect directly with those who cherish it. The future belongs to those who honor their heritage while boldly weaving it into the fabric of tomorrow.
                            </p>
                            <p>
                            May your art flourish and your stories travel across the world.
                            </p>
                        </div>
                        <div className="mt-6">
                           <AiTranslations />
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
