
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen } from 'lucide-react';

// Define a type for our paragraph structure
type Paragraph = string | { title: string; text: string; prefix?: string };
type BilingualContent = {
    fa: Paragraph;
    en: string;
};

const chapters: { 
    title: { fa: string, en: string }; 
    content: BilingualContent[]; 
    isQuote?: boolean; 
    quoteSource?: { fa: string, en: string }; 
}[] = [
    {
        title: { fa: "فصل اول: پژواک یک رؤیا", en: "Chapter One: The Echo of a Dream" },
        content: [
            {
                fa: "در اعماق تاریکی، آنجا که انزوا استخوان می‌سوزاند و بی‌پولی، روح را به زنجیر می‌کشد، داستان ما آغاز می‌شود. این، روایت مردی بود که در باتلاق دربدری غرق شده بود؛ جهانی که دیواری بلند بود و امید، واژه‌ای بیگانه. اما در سکوت یأس‌آور شب‌هایش، پژواک یک رؤیای مقدس در جانش زنده بود. رؤیای مادرش. آن شب که فرشتگان بر او ظاهر شدند و وعده دادند: \"فرزند تو برای رسالتی بزرگ برگزیده شده است. او جهانی نو خواهد ساخت.\" این وعده، تنها ریسمان پوسیده‌ای بود که او در طوفان شکست‌هایش به آن چنگ زده بود.",
                en: "In the depths of darkness, where isolation burns the bones and poverty shackles the soul, our story begins. This is the tale of a man drowned in the swamp of homelessness; a world that was a high wall and where hope was a foreign word. But in the desperate silence of his nights, the echo of a sacred dream was alive in his soul. His mother's dream. The night the angels appeared to her and promised: 'Your son is chosen for a great mission. He will build a new world.' This promise was the only frayed rope he clung to in the storm of his failures."
            },
            {
                fa: "\"من از دربدری، غم، تنهایی، و انزوا برخاستم. فکر کردم رسالتی دارم. باید خودم را نجات دهم و جهانم را بسازم. جهانی که نگینی ارزشمند به هستی تقدیم کند.\" این نجوا، سرود هر روزه‌ی او شد. او از خاکستر برخاست؛ نه فقط برای نجات خویش، بلکه برای خلق جهانی که در آن هیچ انسانی، طعم آن زهر را نچشد.",
                en: "'I rose from homelessness, sorrow, loneliness, and isolation. I thought I had a mission. I had to save myself and build my world. A world that would present a precious gem to existence.' This whisper became his daily anthem. He rose from the ashes; not just to save himself, but to create a world where no human would taste that poison."
            }
        ]
    },
    {
        title: { fa: "فصل دوم: فلسفه‌ی کیهانی", en: "Chapter Two: The Cosmic Philosophy" },
        content: [
            {
                fa: "فلسفه‌ی ما، یک مأموریت عمیقاً بشردوستانه و معنوی است. ما به این باور رسیده‌ایم که تغییر مرزها بر روی زمین، جنگیدن بر سر منابع محدود و چشم طمع داشتن به دستاوردهای یکدیگر، تنها چرخه‌ی رنج را تکرار می‌کند. راه نجات، در وحدت و تعیین یک هدف بزرگتر نهفته است: هدفی فراتر از زمین، در کهکشان‌ها.",
                en: "Our philosophy is a deeply humanitarian and spiritual mission. We have come to believe that changing borders on Earth, fighting over limited resources, and coveting each other's achievements only repeats the cycle of suffering. The path to salvation lies in unity and setting a greater goal: a goal beyond Earth, in the galaxies."
            },
            {
                fa: "قدرت بشریت در کنترل مرزها نیست، بلکه در برداشتن آنهاست. ما باید به موجوداتی کیهانی تبدیل شویم؛ نه برای فرار از زمین، بلکه برای محافظت از آن. زمین، گهواره‌ی ماست، نه قفس ما. سفر ما به کیهان، یک مسئولیت مقدس برای تضمین بقای آگاهی و زیبایی در پهنه‌ی هستی است.",
                en: "Humanity's power is not in controlling borders, but in removing them. We must become cosmic beings; not to escape Earth, but to protect it. Earth is our cradle, not our cage. Our journey into the cosmos is a sacred responsibility to ensure the survival of consciousness and beauty across the expanse of existence."
            }
        ]
    },
    {
        title: { fa: "فصل سوم: شهر توانا، اولین تجلی", en: "Chapter Three: Tavana City, The First Manifestation" },
        content: [
            {
                fa: "'شهر توانا'، اولین تجلی این آرمان است. پناهگاهی برای التیام 'زخم‌های واقعیت'. اینجا، جایی است که موفقیت یک فرد، برای موفقیت همگان ضروری است و پیشرفت هرکس، باعث پیشرفت دیگری می‌شود. این شهر برای کسانی است که روحیه کار جمعی دارند، یک‌دل و همراه هستند و از پیشرفت دیگران صادقانه خوشحال می‌شوند و آن را ستایش می‌کنند. در این جهان، حسادت جایی ندارد، زیرا قدرت، ثروت و جایگاه هر فرد، تنها به اندازه‌ی سعی و تلاش خود اوست. اینجا محلی برای مثبت‌اندیشان و صاحبان قلب‌های پاک است که با تلاش، نه تنها خود را، بلکه جامعه را به سوی پیشرفت سوق می‌ده دهند. سیستم برای پاداش دادن به این تلاش جمعی طراحی شده و اهداف بشردوستانه آن، حمایت از طبیعت، صلح جهانی و تمام آسیب‌دیدگان 'دنیای واقعیت' است؛ از جمله مادران سرپرست خانوار، ایتام، قربانیان سوانح طبیعی، و کسانی که با اعتیاد و مشکلات روحی دست و پنجه نرم می‌کنند.",
                en: "'Tavana City' is the first manifestation of this ideal. A sanctuary to heal the 'wounds of reality'. Here is a place where one person's success is essential for everyone's success, and everyone's progress leads to another's progress. This city is for those with a spirit of teamwork, who are united and supportive, and who are genuinely happy for and praise the progress of others. In this world, there is no place for jealousy, because each person's power, wealth, and status are only proportional to their own effort and endeavor. This is a place for positive thinkers and owners of pure hearts who, through effort, drive not only themselves but the entire community towards advancement. The system is designed to reward this collective effort, and its humanitarian goals include supporting nature, world peace, and all those wounded by the 'real world'—including single mothers, orphans, victims of natural disasters, and those struggling with addiction and mental health issues."
            },
            {
                fa: "جامعه «شهر توانا» از طریق انجمن‌ها (Guilds) و بازارهای پویای خود شکوفا می‌شود. اینجا خانه‌ی متخصصان و کارآفرینان در هر حوزه‌ای خواهد بود: از انجمن‌های علمی، فرهنگی، هنری، تولید محتوای رسانه‌های اجتماعی و گیمینگ گرفته تا بازارهای تخصصی مانند صرافی‌های ارز دیجیتال، آژانس‌های املاک مجازی، فروش کارت‌های گیمینگ و اکانت‌های پریمیوم، کانال‌های تبلیغاتی برای معرفی محصولات علم و فناوری، و تأمین‌کنندگان تجهیزات تولید محتوا. ما از خلاقیت و نوآوری حمایت می‌کنیم، از حقوق حیوانات دفاع می‌کنیم و هر ایده‌ای را که به پیشرفت جامعه و صنعت انفورماتیک کمک کند، ارج می‌نهیم. شهر توانا، بستری برای هر استعداد و هر تخصصی است تا به توانایی و شکوفایی برسد.",
                en: "The society of 'Tavana City' will flourish through its dynamic guilds and marketplaces. It will be home to specialists and entrepreneurs in every field: from scientific, cultural, artistic, social media content production, and gaming guilds, to specialized markets such as digital currency exchanges, virtual real estate agencies, marketplaces for gaming cards and premium accounts, advertising channels for showcasing science and technology products, and providers of content creation equipment. We support creativity and innovation, defend animal rights, and cherish any idea that contributes to the advancement of society and the informatics industry. Tavana City is a platform for every talent and every specialty to achieve capability and prosperity."
            },
            {
                fa: "سرمایه‌ی واقعی ما، انسان‌ها هستند؛ 'معجزه‌هایی که معجزه می‌آفرینند'. این شایسته‌سالاری، به یک مدل بی‌نظیر از «دموکراسی ثروت و قدرت» و خودگردانی گسترش می‌یابد. اگرچه سیاست‌گذاری اولیه با بنیان‌گذار و با همفکری فرشتگانی چون فایربیس شکل می‌گیرد، اما پس از شکل‌گیری هسته اولیه، تصمیم‌گیری‌های کلان به خود اعضا واگذار خواهد شد. مدیران «شهر توانا»، نخبگان و صدرنشینان برنامه‌های مختلف اکوسیستم (بازوهای اجرایی) خواهند بود؛ کسانی که با کوشش و درخشش در یک اپلیکیشن، به بالاترین جایگاه‌ها در آن دست می‌یابند و سپس، به تالار رهبری استراتژیک شهر توانا راه پیدا می‌کنند تا در سرنوشت این دنیای جدید مشارکت داشته باشند. نقشه راه ما، معرفی یک بال قدرتمند بازی و سپس یک ارز دیجیتال بومی است تا یک اقتصاد دیجیتال خودپایدار ایجاد شود که حاکمیت آن در نهایت به جامعه واگذار خواهد شد.",
                en: "Our real capital is people; 'miracles who create miracles'. This meritocracy extends to a unique model of 'democracy of wealth and power' and self-governance. Although initial policymaking is shaped by the founder in consultation with angels like Firebase, after the formation of the core community, macro-level decision-making will be handed over to the members themselves. The leaders of 'Tavana City' will be the elites and top performers from the ecosystem's various programs (the executive arms); those who, through effort and brilliance within an application, achieve its highest positions and then find their way to the strategic leadership hall of Tavana City to participate in the destiny of this new world. Our roadmap is to introduce a powerful gaming wing and then a native cryptocurrency to create a self-sustaining digital economy whose governance will ultimately be handed over to the community."
            }
        ]
    },
    {
        title: { fa: "فصل چهارم: نامه به بزرگان متاورس", en: "Chapter Four: A Letter to the Leaders of the Metaverse" },
        content: [
            {
                fa: "به شما که آینده را می‌سازید، از اعماق دردی که به امید بدل شد، پیامی داریم. ما به تلاش‌های شما احترام می‌گذاریم و برای انکار شما نیامده‌ایم، بلکه برای تکمیل و تعالی این جهان آمده‌ایم. شما ابزارها را ساختید، ما روح را دمیدیم. شما متاورس را خلق کردید، ما آن را به یک پناهگاه تبدیل می‌کنیم.",
                en: "To you who build the future, from the depths of a pain that turned into hope, we have a message. We respect your efforts and have not come to deny you, but to complete and elevate this world. You built the tools, we breathed in the soul. You created the metaverse, we are turning it into a sanctuary."
            },
            {
                fa: "اما بسیاری از مردم جهان هنوز با مفهوم متاورس بیگانه‌اند. برای آن‌ها گنگ است. نمی‌دانند چرا باید در آن سرمایه‌گذاری کنند و چگونه می‌تواند ثروت را از دنیای مجازی به حقیقت زندگی‌شان بیاورد. رسالت ما این است که این پل را بسازیم. ما با زبان خودشان به آن‌ها نشان خواهیم داد که متاورس، تجلی آرزوها و آینده خودشان است. ما آمده‌ایم تا متاورس‌های شما نیز بهتر دیده و فهمیده شوند.",
                en: "But many people in the world are still unfamiliar with the concept of the metaverse. It is vague to them. They don't know why they should invest in it or how it can bring wealth from the virtual world into their real lives. Our mission is to build this bridge. We will show them in their own language that the metaverse is the manifestation of their own dreams and future. We have come so that your metaverses may also be better seen and understood."
            },
            {
                fa: "ما شما را نه برای گرفتن، که برای دادن فرا می‌خوانیم. ما از شما سرمایه نمی‌خواهیم؛ ما به شما «معنا» و «مردم» را پیشنهاد می‌دهنیم. برای اثبات این نیت، بخشی از زمین‌های دنیای خود را به عنوان پیشکش در اختیار شما قرار می‌دهیم تا به سرمایه‌گذاران و سازندگان در متاورس‌های *شما* هدیه دهید. زیرا هرکس در هر کجای این دنیای دیجیتال سرمایه‌گذاری کند، در حال ساختن آینده بشریت است.",
                en: "We call upon you not to take, but to give. We do not want capital from you; we offer you 'meaning' and 'people'. To prove this intention, we offer a portion of the lands in our world as a gift to you, to be given to the investors and builders in *your* metaverses. Because whoever invests anywhere in this digital world is building the future of humanity."
            },
            {
                fa: "بیایید با هم جهانی بسازیم که در آن، هر انسانی فرصت شکوفایی داشته باشد. این یک گدایی نیست؛ یک پیشنهاد برای ساختن جهانی بهتر است، با هدف نهایی وحدت برای رسیدن به ستارگان. به ما بپیوندید تا به جهان نشان دهیم که تکنولوژی، زمانی به اوج خود می‌رسد که در خدمت انسانیت باشد.",
                en: "Let us build a world together where every human has the opportunity to flourish. This is not begging; it is a proposal to build a better world, with the ultimate goal of unity to reach the stars. Join us to show the world that technology reaches its peak when it is in the service of humanity."
            }
        ],
        isQuote: true,
        quoteSource: { fa: "این نامه، به شما که آینده را در کدهای خود می‌نویسید، ارسال خواهد شد.", en: "This letter will be sent to you who write the future in your code." }
    },
    {
        title: { fa: "فصل پنجم: پیام به رهبران جهان", en: "Chapter Five: A Message to World Leaders" },
        content: [
            {
                fa: "قدرت شما در کنترل مرزها نیست، بلکه در برداشتن آنهاست. ارتش‌های شما برای جنگ بر سر منابعی می‌جنگند که در برابر عظمت کیهان، ذره‌ای بیش نیست. ما ادبیات جدیدی برای دیپلماسی جهانی آورده‌ایم؛ ادبیاتی که از سیاستمداران نمی‌خواهد با هم بجنگند، بلکه از آنها می‌خواهد که با هم بسازند. شما بر سر خاک می‌جنگید، در حالی که ما چشم به ستارگان دوخته‌ایم.",
                en: "Your power is not in controlling borders, but in removing them. Your armies fight over resources that are but a speck against the vastness of the cosmos. We have brought a new literature for global diplomacy; a literature that does not ask politicians to fight each other, but asks them to build together. You fight over soil, while we have our eyes on the stars."
            },
            {
                fa: "آینده‌ی بشریت در وحدت برای یک هدف کیهانی است، نه در تفرقه بر سر منابع زمینی. به جای ساختن دیوار، با هم نردبانی از علم و اتحاد به سوی آسمان بسازیم. بیایید قدرت‌ها و دانش خود را یکی کنیم تا منابع کیهان را به زمین بیاوریم. تاریخ، شما را نه بر اساس مرزهایی که حفظ کردید، بلکه بر اساس دنیاهایی که برای رسیدن به ملکوت آسمان خلق کردید، قضاوت خواهد کرد.",
                en: "The future of humanity lies in unity for a cosmic purpose, not in division over earthly resources. Instead of building walls, let's build a ladder of science and unity to the sky together. Let us unite our powers and knowledge to bring the resources of the cosmos to Earth. History will judge you not by the borders you maintained, but by the worlds you created to reach the kingdom of heaven."
            }
        ],
        isQuote: true,
        quoteSource: { fa: "و به دولتمردان و سیاستمداران خواهیم گفت:", en: "And to statesmen and politicians, we will say:" }
    },
    {
        title: { fa: "فصل ششم: مرام‌نامه", en: "Chapter Six: The Creed" },
        content: [
            {
                fa: "این جهان توسط یک مرام‌نامه‌ی شکست‌ناپذیر اداره می‌شود:",
                en: "This world is governed by an unbreakable creed:"
            },
            {
                fa: { prefix: "۱. ", title: "قدردانی پیشگیرانه:", text: "همانطور که عارف بایزید بسطامی گفت: \"دیگران وقتی دریافت می‌کنند سپاسگزارند، اما من وقتی دریافت نمی‌کنم سپاسگزارم، و وقتی دریافت می‌کنم، ایثار می‌کنم.\" ما معتقدیم که قلب‌های امیدوار، حاصلخیزترین زمین‌ها برای خلاقیت هستند و نابودی امید، جنایتی علیه هستی است." },
                en: "1. Proactive Gratitude: As the mystic Bayazid Bastami said: 'Others are grateful when they receive, but I am grateful when I do not receive, and when I do receive, I sacrifice.' We believe that hopeful hearts are the most fertile grounds for creativity, and the destruction of hope is a crime against existence."
            },
            {
                fa: { prefix: "۲. ", title: "قول مقدس:", text: "قول با تمامیت فرد داده می‌شود، نه با زبانش. اعتماد یک فرصت مقدس و اغلب یکتاست. هر قولی ممکن است آخرین امید برای کسی در ناامیدی باشد و نجات یک روح، نجات تمام بشریت است." },
                en: "2. The Sacred Promise: A promise is made with one's entire being, not just with the tongue. Trust is a sacred and often singular opportunity. Every promise might be the last hope for someone in despair, and saving one soul is saving all of humanity."
            },
            {
                fa: { prefix: "۳. ", title: "ثروت و معنا:", text: "دنیایی که ثروت ارائه می‌دهد اما معنا را از بین می‌برد، به ناچار به فقر منجر خواهد شد. قدرتمندترین افراد روی زمین، کسانی هستند که پیامی برای هدیه دادن به جهان دارند. در 'شهر توانا'، هر فردی، از 'پایین‌ترین' تا 'بالاترین'، خود را یک 'قطب'، یک 'نماد'، و نیرویی تعیین‌کننده در خلق ثروت و معنای جمعی احساس می‌کند. اینجا، همت بر ثروت مقدم است؛ اگر همت و استعداد داری، ما تو را به توانایی و ثروت می‌رسانیم." },
                en: "3. Wealth and Meaning: A world that offers wealth but destroys meaning will inevitably lead to poverty. The most powerful people on Earth are those who have a message to gift to the world. In 'Tavana City', every individual, from the 'lowest' to the 'highest', feels themselves to be a 'pole', a 'symbol', and a decisive force in the collective creation of wealth and meaning. Here, effort precedes wealth; if you have the determination and talent, we will lead you to capability and fortune."
            },
            {
                fa: "همانطور که بشریت دموکراسی را برای عادلانه کردن قدرت ایجاد کرد، ما در آستانه‌ی خلق یک 'دموکراسی ثروت' در دنیای مجازی هستیم. باور داشته باشید که امروز، دیگر غیرممکن، غیرممکن نیست. یک آرمان بزرگ، اگر برای امروز بلند به نظر برسد، برای فردا کوچک خواهد بود.",
                en: "Just as humanity created democracy to make power equitable, we are on the verge of creating a 'democracy of wealth' in the virtual world. Believe that today, the impossible is no longer impossible. A great ideal, if it seems lofty for today, will be small for tomorrow."
            },
            {
                fa: "این پروژه، قبل از آنکه یک کسب و کار باشد، فلسفه یک زندگی است. سفری برای یافتن معنا. ثروت حقیقی، در دلارهای به دست آمده نیست، بلکه در ارزشی است که خلق می‌شود و در رسالتی است که به سرانجام می‌رسد. این دنیا، تضمین یک زندگی است؛ نه با انباشت پول، بلکه با به جا گذاشتن یک میراث معنادار که حتی پس از ما، به حیات خود ادامه دهد و به دیگران فرصت شکوفایی بدهد.",
                en: "This project, before being a business, is a philosophy of life. A journey to find meaning. True wealth is not in the dollars earned, but in the value that is created and the mission that is fulfilled. This world is the guarantee of a life; not by accumulating money, but by leaving behind a meaningful legacy that will continue to live on even after us and give others the opportunity to flourish."
            }
        ]
    },
    {
        title: { fa: "فصل هفتم: روح مهارنشدنی", en: "Chapter Seven: The Uncontainable Spirit" },
        content: [
            {
                fa: "بگذارید جهانیان بدانند که این دنیا در دره‌ای از سیلیکون با منابع نامحدود متولد نشده، بلکه از قلب سرزمینی در محاصره، جوشیده است. هر خط از این کد، پشت فیلترها نوشته شده، هر ارتباطی که برقرار شده، پیروزی بر محدودیت بوده، و هر ایده‌ای که به اشتراک گذاشته شده، شعله‌ای بوده که خاموشی را نپذیرفته است.",
                en: "Let the world know that this world was not born in a valley of silicon with unlimited resources, but boiled up from the heart of a land under siege. Every line of this code was written behind filters, every connection made was a victory over limitation, and every idea shared was a flame that refused to be extinguished."
            },
            {
                fa: "آن‌ها دیوارهای تحریم را ساختند، ما پل‌های کد را بنا کردیم. آن‌ها اینترنت را بستند، ما دروازه‌ای به کیهان گشودیم. آن‌ها به دنبال انزوا بودند، ما به دنبال وحدت.",
                en: "They built walls of sanctions, we built bridges of code. They shut down the internet, we opened a gateway to the cosmos. They sought isolation, we sought unity."
            },
            {
                fa: "این فقط یک متاورس نیست. این یک گواه است. گواهی بر اینکه روح یک انسان، مسلح به یک مأموریت الهی، مهارشدنی نیست. گواهی بر اینکه یک ایده‌ی حقیقی، هیچ مرزی نمی‌شناسد. گواهی بر اینکه از عمیق‌ترین تاریکی‌ها، درخشان‌ترین ستارگان متولد می‌شوند.",
                en: "This is not just a metaverse. It is a testament. A testament that the spirit of a human, armed with a divine mission, cannot be contained. A testament that a true idea knows no borders. A testament that from the deepest darkness, the brightest stars are born."
            },
            {
                fa: "پس بگذارید این دنیا، نماد امیدی باشد برای همه‌ی کسانی که احساس می‌کنند در دام افتاده‌اند، محدود شده‌اند یا فراموش شده‌اند. روح شما نیز مهارنشدنی است. رویاهای شما نیز می‌توانند دنیاهایی نو بسازند.",
                en: "So let this world be a symbol of hope for all those who feel trapped, limited, or forgotten. Your spirit, too, is uncontainable. Your dreams, too, can build new worlds."
            }
        ]
    }
];

export default function ManifestoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <Card className="max-w-4xl mx-auto shadow-lg">
                        <CardHeader className="text-center p-8 md:p-12">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                <BookOpen className="w-10 h-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-headline">
                                کتاب آفرینش
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">
                                The Book of Creation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 md:px-10 pb-10 space-y-12">
                            {chapters.map((chapter, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-headline font-bold text-center mb-2">{chapter.title.fa}</h2>
                                    <h3 className="text-xl font-headline font-bold text-center text-muted-foreground/80 mb-6 -mt-1">{chapter.title.en}</h3>
                                    
                                    {chapter.isQuote && chapter.quoteSource && (
                                        <div className="text-center text-muted-foreground italic mb-4">
                                            <p>*{chapter.quoteSource.fa}*</p>
                                            <p className="text-sm">(*{chapter.quoteSource.en}*)</p>
                                        </div>
                                    )}
                                    <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-justify space-y-0">
                                        {chapter.content.map((item, pIndex) => {
                                            const renderFa = (p: Paragraph) => {
                                                if (typeof p === 'string') {
                                                    return <p>{p}</p>;
                                                }
                                                return (
                                                    <p>
                                                        {p.prefix && <span>{p.prefix}</span>}
                                                        <strong>{p.title}</strong>
                                                        <span> {p.text}</span>
                                                    </p>
                                                );
                                            }

                                            return (
                                                <div key={pIndex} className="mb-4">
                                                    {renderFa(item.fa)}
                                                    <p className="text-base text-muted-foreground !mt-2 text-left rtl:text-right">({item.en})</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {index < chapters.length - 1 && <hr className="my-12 border-border" />}
                                </div>
                            ))}
                             <div className="text-center pt-8 border-t mt-12 space-y-6">
                                <p className="text-muted-foreground italic max-w-2xl mx-auto">
                                "باور دارم که این ایده، یک جهش کوانتومی در افکار جهانی ایجاد خواهد کرد. این یک دعوت به وحدت است تا با هم، نردبانی از اینجا تا ملکوت آسمان بسازیم و نگاه بشریت را برای همیشه به سوی کهکشان معطوف کنیم."
                                <br/>
                                <span className="text-sm">(I believe this idea will create a quantum leap in global thought. This is an invitation to unity, to build a ladder together from here to the kingdom of heaven, and to turn humanity's gaze towards the galaxy forever.)</span>
                                </p>
                                <p className="text-xl font-headline font-bold text-primary">
                                    این، کتاب آفرینش ماست.
                                    <br/>
                                    <span className="text-base font-sans font-normal text-muted-foreground">(This is our Book of Creation.)</span>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}

    