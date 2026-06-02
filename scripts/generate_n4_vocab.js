import fs from 'fs';
import path from 'path';

// Compact representation format:
// "kanji|kana|romaji|meaning|type|exampleJap|exampleRead|exampleTrans"
// If there is no kanji: "|kana|romaji|meaning|type|exampleJap|exampleRead|exampleTrans"

const verbsCompact = [
  "送る|おくる|okuru|mengirim / mengantar|Verb (Godan)|友達にプレゼントを送りました。|ともだち に プレゼント を おくりました。|Saya telah mengirim hadiah kepada teman.",
  "探す|さがす|sagasu|mencari|Verb (Godan)|失くした鍵を探しています。|なくした かぎ を さがしています。|Saya sedang mencari kunci yang hilang.",
  "間に合う|まにあう|maniau|keburu / sempat / tepat waktu|Verb (Godan)|急げば電車に間に合います。|いそげば でんしゃ に まにあいます。|Jika bergegas, kita akan sempat naik kereta.",
  "拾う|ひろう|hirou|memungut / mengambil|Verb (Godan)|道で財布を拾いました。|みち で さいふ を ひろいました。|Saya memungut dompet di jalan.",
  "通う|かよう|kayou|pulang pergi (sekolah/kantor)|Verb (Godan)|毎日電車で大学に通っています。|まいにち でんしゃ で だいがく に かよっています。|Setiap hari saya pulang pergi kuliah naik kereta.",
  "踊る|おどる|odoru|menari|Verb (Godan)|みんなで盆踊りを踊りましょう。|みんな で ぼんおどり を おどりましょう。|Mari kita menari tarian Bon bersama.",
  "噛む|かむ|kamu|mengunyah / menggigit|Verb (Godan)|ご飯はよく噛んで食べてください。|ごはん は よく かんで たべて ください。|Makanlah nasi dengan mengunyahnya baik-baik.",
  "選ぶ|えらぶ|erabu|memilih|Verb (Godan)|たくさんの中から好きなものを選んでください。|たくさん の なか から すきな もの を えらんで ください。|Pilihlah yang Anda sukai dari sekian banyak pilihan.",
  "誘う|さそう|sasou|mengajak / mengundang|Verb (Godan)|友達を映画に誘いました。|ともだち を えいが に さそいました。|Saya mengajak teman menonton film.",
  "起こす|おこす|okosu|membangunkan|Verb (Godan)|明日、朝六時に起こしてください。|あした、あさ ろくじ に おこして ください。|Tolong bangunkan saya besok jam 6 pagi.",
  "頼む|たのむ|tanomu|meminta / memohon|Verb (Godan)|彼に手伝いを頼みました。|かれ に てつだい を たのみました。|Saya meminta bantuannya.",
  "怒る|おこる|okoru|marah|Verb (Godan)|先生を怒らせてしまいました。|せんせい を おこらせて しまいました。|Saya tidak sengaja membuat guru marah.",
  "違う|ちがう|chigau|berbeda / salah|Verb (Godan)|私の意見は彼と違います。|わたし の いけん は かれ と ちがいます。|Pendapat saya berbeda dengan dia.",
  "手伝う|てつだう|tetsudau|membantu|Verb (Godan)|母の料理を手伝います。|はは の りょうり を てつだいます。|Saya membantu ibu memasak.",
  "払う|はらう|harau|membayar|Verb (Godan)|レジでお金を払いました。|レジ で おかね を はらいました。|Saya membayar uang di kasir.",
  "笑う|わらう|warau|tertawa / tersenyum|Verb (Godan)|彼女はいつも楽しそうに笑います。|かのじょ は いつも たのしそう に わらいます。|Dia selalu tertawa dengan tampak senang.",
  "歌う|うたう|utau|bernyanyi|Verb (Godan)|カラオケで日本の歌を歌いました。|カラオケ で にほん の うた を うたいました。|Saya menyanyikan lagu Jepang di karaoke.",
  "向かう|むかう|mukau|menuju ke|Verb (Godan)|今、駅に向かっています。|いま、えき に むかっています。|Sekarang saya sedang menuju ke stasiun.",
  "吸う|すう|suu|menghisap / merokok|Verb (Godan)|ここでタバコを吸わないでください。|ここ で タバコ を すわないで ください。|Tolong jangan merokok di sini.",
  "洗う|あらう|arau|mencuci|Verb (Godan)|ご飯を食べる前に手を洗います。|ごはん を たべる まえ に て を あらいます。|Mencuci tangan sebelum makan nasi.",
  "言う|いう|iu|berkata / mengatakan|Verb (Godan)|彼は明日来ると言いました。|かれ は あした くる と いいました。|Dia berkata bahwa besok akan datang.",
  "思う|おもう|omou|berpikir / mengira|Verb (Godan)|この試験は難しいと思います。|この しけん は むずかしい と おもいます。|Saya pikir ujian ini sulit.",
  "行う|おこなう|okonau|melaksanakan / mengadakan|Verb (Godan)|会議は来週行われます。|かいぎ は らいしゅう おこなわれます。|Rapat akan diadakan minggu depan.",
  "戻る|もどる|modoru|kembali|Verb (Godan)|すぐ事務所に戻ります。|すぐ じむしょ に もどります。|Saya akan segera kembali ke kantor.",
  "壊す|こわす|kowasu|merusak / memecahkan|Verb (Godan)|おもちゃを壊してしまいました。|おもちゃ を こわして しまいました。|Saya tidak sengaja merusak mainannya.",
  "消す|けす|kesu|memadamkan / mematikan|Verb (Godan)|部屋を出るときは電気を消してください。|へや を でる とき は でんき を けして ください。|Tolong matikan lampu ketika keluar kamar.",
  "直す|なおす|naosu|memperbaiki / membenarkan|Verb (Godan)|自転車のパンクを直しました。|じてんしゃ の パンク を なおしました。|Saya memperbaiki ban sepeda yang bocor.",
  "回す|まわす|mawasu|memutar|Verb (Godan)|このつまみを右に回してください。|この つまみ を みぎ に まわして ください。|Tolong putar tombol ini ke kanan.",
  "返す|かえす|kaesu|mengembalikan (barang)|Verb (Godan)|図書館の本を返しました。|としょかん の ほん を かえしました。|Saya telah mengembalikan buku perpustakaan.",
  "渡す|わたす|watasu|menyerahkan|Verb (Godan)|先生に宿題を渡しました。|せんせい に しゅくだい を わたしました。|Saya menyerahkan PR kepada guru.",
  "話す|はなす|hanasu|berbicara / mengobrol|Verb (Godan)|日本語で友達と話します。|にほんご で ともだち と はなします。|Berbicara dengan teman menggunakan bahasa Jepang.",
  "残す|のこす|nokosu|menyisakan / meninggalkan|Verb (Godan)|食べ物を残さないでください。|たべもの を のこさないで ください。|Tolong jangan menyisakan makanan.",
  "沸かす|わかす|wakasu|mendidihkan (air)|Verb (Godan)|お湯を沸かしてコーヒーを淹れます。|おゆ を わかして コーヒー を いれます。|Mendidihkan air panas lalu menyeduh kopi.",
  "押す|おす|osu|menekan / mendorong|Verb (Godan)|このボタンを押すとドアが開きます。|この ボタン を おすと ドア が あきます。|Pintu akan terbuka jika menekan tombol ini.",
  "貸す|かす|kasu|meminjamkan|Verb (Godan)|ペンを貸してくれませんか。|ペン を かして くれません か。|Maukah Anda meminjamkan pulpen?",
  "移す|うつす|utsusu|memindahkan|Verb (Godan)|荷物を別の部屋に移しました。|にもつ を べつの へや に うつしました。|Saya memindahkan barang bawaan ke kamar lain.",
  "落とす|おとす|otosu|menjatuhkan / menghilangkan|Verb (Godan)|どこかで財布を落としてしまいました。|どこか で さいふ を おとす て しまいました。|Saya tidak sengaja menjatuhkan dompet di suatu tempat.",
  "死ぬ|しぬ|shinu|meninggal / mati|Verb (Godan)|祖父は去年死にました。|そふ は きょねん しにました。|Kakek saya meninggal dunia tahun lalu.",
  "遊ぶ|あそぶ|asobu|bermain / bersenang-senang|Verb (Godan)|公園で子供たちが遊んでいます。|こうえん で こどもたち が あそんでいます。|Anak-anak sedang bermain di taman.",
  "呼ぶ|よぶ|yobu|memanggil / mengundang|Verb (Godan)|タクシーを呼んでください。|タクシー を よんで ください。|Tolong panggilkan taksi.",
  "飛ぶ|とぶ|tobu|terbang / melompat|Verb (Godan)|空に鳥が飛んでいます。|そら に とり が とんでいます。|Burung sedang terbang di langit.",
  "楽しむ|たのしむ|tanoshimu|menikmati|Verb (Godan)|日本での生活を楽しんでいます。|にほん で の せいかつ を たのしんでいます。|Saya sedang menikmati kehidupan di Jepang.",
  "住む|すむ|sumu|tinggal / bermukim|Verb (Godan)|私はジャカルタに住んでいます。|わたし は ジャカルタ に すんでいます。|Saya tinggal di Jakarta.",
  "休む|やすむ|yasumu|beristirahat / libur|Verb (Godan)|今日は風邪で会社を休みました。|きょう は かぜ で かいしゃ を やすみました。|Hari ini saya libur kerja karena flu.",
  "踏む|ふむ|fumu|menginjak|Verb (Godan)|電車の中で足を踏まれました。|でんしゃ の なか で あし を ふまれました。|Kaki saya terinjak di dalam kereta.",
  "包む|つつむ|tsutsumu|membungkus|Verb (Godan)|プレゼントを綺麗な紙で包みました。|プレゼント を きれいな かみ で つつみました。|Saya membungkus kado dengan kertas yang indah.",
  "込む|こむ|komu|padat / ramai / sesak|Verb (Godan)|朝の電車はとても込んでいます。|あさ の でんしゃ は とても こんでいます。|Kereta pagi hari sangat padat.",
  "曇る|くもる|kumoru|mendung / berawan|Verb (Godan)|午後から空が曇ってきました。|ごご から そら が くもって きました。|Sejak siang langit mulai mendung.",
  "走る|はしる|hashiru|berlari|Verb (Godan)|遅刻しそうなので駅まで走りました。|ちこく しそう なので えき まで はしりました。|Saya berlari ke stasiun karena hampir terlambat.",
  "乗る|のる|noru|naik (kendaraan)|Verb (Godan)|自転車に乗る練習をしています。|じてんしゃ に のる れんしゅう を しています。|Saya sedang berlatih naik sepeda.",
  "降る|ふる|furu|turun (hujan/salju)|Verb (Godan)|外は雨が降っています。|そと は あめ が ふっています。|Di luar sedang turun hujan.",
  "取る|とる|toru|mengambil / meraih|Verb (Godan)|塩を取っていただけませんか。|しお を とって いただけませんか。|Maukah Anda mengambilkan garam?",
  "要る|いる|iru|memerlukan / butuh|Verb (Godan)|ビザの申請には写真が要ります。|ビザ の しんせい には しゃしん が いります。|Memerlukan pasfoto untuk pengajuan visa.",
  "知る|しる|shiru|tahu / mengenal|Verb (Godan)|彼の電話番号を知っていますか。|かれ の でんわばんごう を しっています か。|Apakah Anda tahu nomor teleponnya?",
  "勝つ|かつ|katsu|menang|Verb (Godan)|私たちのチームが試合に勝ちました。|わたし たち の チーム が しあい に かちました。|Tim kami menang dalam pertandingan.",
  "吹く|ふく|fuku|meniup / bertiup|Verb (Godan)|強い風が吹いています。|つよい かぜ が ふいています。|Angin kencang sedang bertiup.",
  "引く|ひく|hiku|menarik / merujuk (kamus)|Verb (Godan)|分からない言葉を辞書で引きます。|わからない ことば を じしょ で ひきます。|Mencari kata yang tidak dimengerti di dalam kamus.",
  "立つ|たつ|tatsu|berdiri|Verb (Godan)|電車の中で一時間立ち続けました。|でんしゃ の なか で いちじかん たちつづけました。|Saya terus berdiri selama satu jam di dalam kereta.",
  "止める|とめる|tomeru|menghentikan / memarkir|Verb (Ichidan)|車を止めました。|くるま を とめました。|Saya menghentikan mobil.",
  "見つける|みつける|mitsukeru|menemukan|Verb (Ichidan)|鍵を見つけました。|かぎ を みつけました。|Saya menemukan kunci.",
  "始める|はじめる|hajimeru|memulai|Verb (Ichidan)|仕事を始めましょう。|しごと を はじめましょう。|Mari kita mulai pekerjaan.",
  "考える|かんがえる|kangaeru|berpikir|Verb (Ichidan)|将来のことを考えます。|しょうらい の こと を かんがえます。|Saya memikirkan masa depan.",
  "調べる|しらべる|shiraberu|memeriksa / menyelidiki|Verb (Ichidan)|辞書で言葉を調べます。|じしょ で ことば を しらべます。|Saya memeriksa kata di kamus.",
  "続ける|つづける|tsuduzeru|melanjutkan|Verb (Ichidan)|勉強を続けます。|べんきょう を つづけます。|Saya melanjutkan belajar.",
  "立てる|たてる|tateru|mendirikan / menyusun|Verb (Ichidan)|計画を立てました。|けいかく を たてました。|Saya menyusun rencana.",
  "建てる|たてる|tateru|membangun (gedung)|Verb (Ichidan)|家を建てました。|いえ を たてました。|Saya membangun rumah.",
  "決める|きめる|kimeru|memutuskan|Verb (Ichidan)|旅行の日程を決めました。|りょこう の にってい を きめました。|Saya memutuskan jadwal perjalanan.",
  "信じる|しんじる|shinjiru|mempercayai|Verb (Ichidan)|彼を信じています。|かれ を しんじて います。|Saya mempercayainya.",
  "知らせる|しらせる|shiraseru|memberitahu|Verb (Ichidan)|結果を知らせます。|けっか を しらせます。|Saya akan memberitahu hasilnya.",
  "育てる|そだてる|sodateru|membesarkan|Verb (Ichidan)|花を育てています。|はな を そだてています。|Saya menanam/memelihara bunga.",
  "負ける|まける|makeru|kalah|Verb (Ichidan)|試合に負けました。|しあい に まけました。|Saya kalah dalam pertandingan.",
  "遅れる|おくれる|okureru|terlambat|Verb (Ichidan)|授業に遅れました。|じゅぎょう に おくれました。|Saya terlambat sekolah.",
  "植える|うえる|ueru|menanam|Verb (Ichidan)|庭に木を植えます。|にわ に き を うえます。|Menanam pohon di kebun.",
  "消える|きえる|kieru|padam|Verb (Ichidan)|火が消えました。|ひ が きえました。|Apinya padam.",
  "壊れる|こわれる|kowareru|rusak|Verb (Ichidan)|カメラが壊れました。|カメラ が こわれました。|Kamera telah rusak.",
  "割れる|われる|wareru|pecah|Verb (Ichidan)|皿が割れました。|さら が われました。|Piringnya pecah.",
  "折れる|おれる|oreru|patah|Verb (Ichidan)|枝が折れました。|えだ が おれました。|Dahannya patah.",
  "破れる|やぶれる|yabureru|robek|Verb (Ichidan)|紙が破れました。|かみ が やぶれました。|Kertasnya robek.",
  "汚れる|よごれる|yogoreru|kotor|Verb (Ichidan)|靴が汚れました。|くつ が よごれました。|Sepatunya kotor.",
  "間違える|まちがえる|machigaeru|salah|Verb (Ichidan)|番号を間違えました。|ばんごう を まちがえました。|Saya salah nomor.",
  "片付ける|かたづける|katadukeru|membereskan|Verb (Ichidan)|机の上を片付けます。|つくえ の うえ を かたづけます。|Membereskan bagian atas meja.",
  "お祝いする|おいわいする|oiwaisuru|merayakan|Verb (Irregular)|誕生日をお祝いしました。|たんじょうび を おいわいしました。|Merayakan hari ulang tahun.",
  "紹介する|しょうかいする|shoukaishuru|memperkenalkan|Verb (Irregular)|彼を紹介します。|かれ を しょうかいします。|Memperkenalkan dia.",
  "案内する|あんないする|annaisuru|memandu|Verb (Irregular)|京都をご案内します。|きょうと を ごあんないします。|Memandu Anda di Kyoto.",
  "説明する|せつめいする|setsumeisuru|menjelaskan|Verb (Irregular)|文法を説明します。|ぶんぽう を せつめいします。|Menjelaskan tata bahasa.",
  "留学する|りゅうがくする|ryuugakusuru|belajar di luar negeri|Verb (Irregular)|日本へ留学したいです。|にほん へ りゅうがく したい です。|Saya ingin belajar di Jepang.",
  "運転する|うんてんする|untensuru|mengemudi|Verb (Irregular)|トラックを運転します。|トラック を うんてんします。|Mengemudikan truk.",
  "予約する|よやくする|yoyakusuru|memesan|Verb (Irregular)|席を予約しました。|せき を よやくしました。|Memesan tempat duduk.",
  "相談する|そうだんする|soudansuru|berkonsultasi|Verb (Irregular)|医師に相談しました。|いし に そうだんしました。|Berkonsultasi dengan dokter.",
  "連絡する|れんらくする|renrakusuru|menghubungi|Verb (Irregular)|明日連絡します。|あした れんらく します。|Besok saya hubungi.",
  "準備する|じゅんびする|junbisuru|mempersiapkan|Verb (Irregular)|旅行を準備します。|りょこう を じゅんびします。|Mempersiapkan perjalanan.",
  "復習する|ふくしゅうする|fukushuusuru|mengulang|Verb (Irregular)|宿題を復習します。|しゅくだい を ふくしゅうします。|Mengulang PR.",
  "予習する|よしゅうする|yoshuusuru|mempersiapkan|Verb (Irregular)|次の課を予習します。|つぎ の か を よしゅうします。|Mempersiapkan bab selanjutnya.",
  "卒業する|そつぎょうする|sotsugyousuru|lulus|Verb (Irregular)|大学を卒業します。|だいがく を そつぎょうします。|Lulus dari universitas.",
  "運動する|うんどうする|undousuru|berolahraga|Verb (Irregular)|毎日運動しています。|まいにち うんどうしています。|Berolahraga setiap hari.",
  "心配する|しんぱいする|shinpaisuru|khawatir|Verb (Irregular)|子供を心配します。|こども を しんぱいします。|Khawatir dengan anak.",
  "招待する|しょうたいする|shoutaisuru|mengundang|Verb (Irregular)|彼を招待しました。|かれ を しょうたいしました。|Mengundang dia.",
  
  // NEW N4 VERBS TO EXPAND TO 180 VERBS
  "諦める|あきらめる|akirameru|menyerah|Verb (Ichidan)|途中で諦めないでください。|とちゅう で あきらめないで ください。|Tolong jangan menyerah di tengah jalan.",
  "謝る|あやまる|ayamaru|meminta maaf|Verb (Godan)|遅刻したことを先生に謝りました。|ちこく した こと を せんせい に あやまりました。|Saya meminta maaf kepada guru karena terlambat.",
  "急ぐ|いそぐ|isogu|bergegas / terburu-buru|Verb (Godan)|遅れそうなので急いでいます。|おくれそう なので いそいで います。|Saya bergegas karena sepertinya akan terlambat.",
  "祈る|いのる|inoru|berdoa|Verb (Godan)|家族の健康を神様に祈ります。|かぞく の けんこう を かみさま に いのります。|Berdoa kepada Tuhan demi kesehatan keluarga.",
  "受ける|うける|ukeru|menerima / mengikuti (ujian)|Verb (Ichidan)|来月、日本語能力試験を受けます。|らいげつ、にほんご のうりょく しけん を うけます。|Bulan depan saya akan mengikuti Ujian Kemampuan Bahasa Jepang.",
  "動く|うごく|ugoku|bergerak / berfungsi|Verb (Godan)|この機械は電気で動きます。|この きかい は でんき で うごきます。|Mesin ini bergerak/berfungsi dengan listrik.",
  "写す|うつす|utsusu|menyalin / memotret|Verb (Godan)|黒板の字をノートに写しました。|こくばん の じ を ノート に うつしました。|Saya menyalin tulisan di papan tulis ke buku catatan.",
  "移る|うつる|utsuru|pindah (tempat/penyakit)|Verb (Godan)|来週、隣の街に引っ越しで移ります。|らいしゅう、となり の まち に ひっこし で うつります。|Minggu depan saya pindah ke kota sebelah.",
  "落ちる|おちる|ochiru|jatuh / gugur|Verb (Ichidan)|木から木の葉が落ちました。|き から このは が おちました。|Daun pohon jatuh dari pohon.",
  "おっしゃる|おっしゃる|ossharu|berkata (hormat)|Verb (Godan)|先生がそうおっしゃいました。|せんせい が そう おっしゃいました。|Guru berkata demikian.",
  "驚く|おどろく|odoroku|terkejut / heran|Verb (Godan)|そのニュースを聞いて驚きました。|その ニュース を きいて おどろきました。|Saya terkejut mendengar berita itu.",
  "思い出す|おもいだす|omoidasu|mengingat kembali / teringat|Verb (Godan)|子供の頃のことを思い出しました。|こども の ころ の こと を おもいだしました。|Saya teringat masa kecil dahulu.",
  "折る|おる|oru|melipat / mematahkan|Verb (Godan)|紙を半分に折ってください。|かみ を はんぶん に おって ください。|Tolong lipat kertasnya menjadi dua.",
  "飾る|かざる|kazaru|menghias / memajang|Verb (Godan)|部屋に綺麗な花を飾りました。|へや に きれいな はな を かざりました。|Saya menghias kamar dengan bunga yang indah.",
  "片付く|かたづく|kataduku|rapi / beres|Verb (Godan)|部屋がやっと片付きました。|へや が やっと かたづきました。|Kamarnya akhirnya rapi juga.",
  "変わる|かわる|kawaru|berubah|Verb (Godan)|信号が赤から緑に変わりました。|しんごう が あか から みどり に かわりました。|Lampu lalu lintas berubah dari merah ke hijau.",
  "変える|かえる|kaeru|mengubah / menukar|Verb (Ichidan)|予定を少し変えました。|よてい を すこし かえました。|Saya sedikit mengubah jadwal rencana.",
  "頑張る|がんばる|ganbaru|berjuang / berusaha keras|Verb (Godan)|試験に合格するために頑張ります。|しけん に ごうかく する ため に がんばります。|Saya akan berjuang keras untuk lulus ujian.",
  "決まる|きまる|kimaru|diputuskan / ditetapkan|Verb (Godan)|出発の日が決まりました。|しゅっぱつ の ひ が きまりました。|Hari keberangkatan telah diputuskan.",
  "比べる|くらべる|kuraberu|membandingkan|Verb (Ichidan)|二つのカメラの性能を比べます。|ふたつ の カメラ の せいのう を くらべます。|Membandingkan performa dua kamera.",
  "くれる|くれる|kureru|memberi (kepada saya)|Verb (Ichidan)|友達が本をくれました。|ともだち が ほん を くれました。|Teman memberi saya buku.",
  "下がる|さがる|sagaru|turun / mundur|Verb (Godan)|熱が下がって良くなりました。|ねつ が さがって よく なりました。|Demamnya sudah turun dan membaik.",
  "下げる|さげる|sageru|menurunkan|Verb (Ichidan)|音量を少し下げてください。|おんりょう を すこし さげて ください。|Tolong turunkan sedikit volumenya.",
  "騒ぐ|さわぐ|sawagu|membuat keributan / berisik|Verb (Godan)|教室で騒いではいけません。|きょうしつ で さわいでは いけません。|Tidak boleh membuat keributan di kelas.",
  "触る|さわる|sawaru|menyentuh / memegang|Verb (Godan)|展示品に触らないでください。|てんじひん に さわらないで ください。|Tolong jangan menyentuh barang pajangan.",
  "叱る|しかる|shikaru|memarahi|Verb (Godan)|宿題をしなかったので叱られました。|しゅくだい を しなかった ので しかられました。|Saya dimarahi karena tidak mengerjakan PR.",
  "過ぎる|すぎる|sugiru|melewati / melampaui / terlalu|Verb (Ichidan)|約束の時間を過ぎてしまいました。|やくそく の じかん を すぎて しまいました。|Waktunya sudah melewati jam perjanjian.",
  "空く|すく|suku|menjadi kosong / lapar|Verb (Godan)|お腹が空きましたね。|おなか が すきました ね。|Perut sudah lapar ya.",
  "進む|すすむ|susumu|maju / berkembang|Verb (Godan)|計画は順調に進んでいます。|けいかく は じんちょう に すすんでいます。|Rencananya berjalan/maju dengan lancar.",
  "滑る|すべる|suberu|terpeleset / licin|Verb (Godan)|道が凍って滑りやすいです。|みち が こおって すべりやすい です。|Jalanan membeku sehingga mudah terpeleset.",
  "育つ|そだつ|sodatsu|tumbuh besar|Verb (Godan)|田舎で健康に育ちました。|いなか で けんこう に そだちました。|Tumbuh besar dengan sehat di desa.",
  "倒れる|たおれる|taoreteru|tumbang / pingsan / roboh|Verb (Ichidan)|台風で木が倒れました。|たいふう で き が たおれました。|Pohon tumbang karena angin topan.",
  "助ける|たすける|tasukeru|menolong / menyelamatkan|Verb (Ichidan)|困っている人を助けます。|こまっている ひと を たすけます。|Menolong orang yang sedang kesulitan.",
  "訪ねる|たずねる|tazuneru|mengunjungi|Verb (Ichidan)|週末に先生の家を訪ねました。|しゅうまつ に せんせい の いえ を たずねました。|Saya mengunjungi rumah guru pada akhir pekan.",
  "足りる|たりる|tariru|cukup|Verb (Ichidan)|生活費はこれで足ります。|せいかつひ は これ で たります。|Uang biaya hidup cukup dengan ini.",
  "伝える|つたえる|tsutaeru|menyampaikan|Verb (Ichidan)|彼に伝言を伝えてください。|かれ に でんごん を つたえて ください。|Tolong sampaikan pesan kepada dia.",
  "続く|つづく|tsuduku|berlanjut|Verb (Godan)|雨が何日も続いています。|あめ が なんにち も つづいています。|Hujan terus berlanjut selama beberapa hari.",
  "連れる|つれる|tsureru|membawa (orang/hewan)|Verb (Ichidan)|子供を動物園へ連れて行きます。|こども を どうぶつえん へ つれて いきます。|Membawa anak pergi ke kebun binatang.",
  "通る|とおる|tooru|melewati / melalui|Verb (Godan)|毎日この道を通って通勤します。|まいにち この みち を とおって つうきん します。|Setiap hari saya melewati jalan ini untuk pergi kerja.",
  "お届けする|おとどけする|otodokesuru|mengantarkan (sopan)|Verb (Irregular)|荷物を午後にお届けします。|にもつ を ごご に おとどけ します。|Saya akan mengantarkan paket pada siang hari.",
  "泊まる|とまる|tomaru|menginap|Verb (Godan)|京都の古い旅館に泊まりました。|きょうと の ふるい りょかん に とまりました。|Saya menginap di penginapan kuno di Kyoto.",
  "取り替える|とりかえる|torikaeru|menukar / mengganti|Verb (Ichidan)|電球を取り替えました。|でんきゅう を とりかえました。|Saya mengganti bola lampunya.",
  "投げる|なげる|nageru|melempar|Verb (Ichidan)|ボールを遠くに投げてください。|ボール を とおく に なげて ください。|Tolong lempar bolanya ke tempat jauh.",
  "亡くなる|なくなる|nakunaru|meninggal dunia|Verb (Godan)|先月、祖母が亡くなりました。|せんげつ、そぼ が なくなりました。|Bulan lalu, nenek saya meninggal dunia.",
  "無くなる|なくなる|nakunaru|hilang / habis|Verb (Godan)|ガソリンが無くなってしまいました。|ガソリン が なくなって しまいました。|Bensinnya sudah habis.",
  "治る|なおる|naoru|sembuh / membaik|Verb (Godan)|風邪がやっと治りました。|かぜ が やっと なおりました。|Penyakit flunya akhirnya sembuh.",
  "慣れる|なれる|nareru|terbiasa|Verb (Ichidan)|日本の生活に慣れました。|にほん の せいかつ に なれました。|Saya sudah terbiasa dengan kehidupan di Jepang.",
  "逃げる|nigeru|nigeru|melarikan diri / kabur|Verb (Ichidan)|泥棒は警察から逃げました。|どろぼう は けいさつ から にげました。|Pencuri itu melarikan diri dari polisi.",
  "似る|にる|niru|mirip|Verb (Ichidan)|彼は父親にとても似ています。|かれ は ちちおや に とても にています。|Dia sangat mirip dengan ayahnya.",
  "盗む|ぬすむ|nusumu|mencuri|Verb (Godan)|誰かが私の傘を盗みました。|だれか が わたし の かさ を ぬすみました。|Seseorang mencuri payung saya.",
  "塗る|ぬる|nuru|mengoleskan / mengecat|Verb (Godan)|パンにバターを塗ります。|パン に バター を ぬります。|Mengoleskan mentega pada roti.",
  "濡れる|ぬれる|nureru|basah|Verb (Ichidan)|雨で靴が濡れてしまいました。|あめ で くつ が ぬれて しまいました。|Sepatu saya basah karena hujan.",
  "眠る|nemuru|nemuru|tidur nyenyak|Verb (Godan)|昨日は八時間ぐっすり眠りました。|きのう は はちじかん ぐっすり ねむりました。|Kemarin saya tidur nyenyak selama delapan jam.",
  "残る|のこる|nokoru|tersisa|Verb (Godan)|クラスに二人だけ残っています。|クラス に ふたり だけ のこっています。|Hanya tersisa dua orang di kelas.",
  "乗り換える|のりかえる|norikaeru|transit / berganti kendaraan|Verb (Ichidan)|次の駅で地下鉄に乗り換えます。|つぎ の えき で ちかてつ に に りかえます。|Saya transit naik MRT di stasiun berikutnya.",
  "運ぶ|hakobu|hakobu|mengangkut / membawa|Verb (Godan)|重い荷物を二階へ運びました。|おもい にもつ を にかい へ はこびました。|Saya membawa barang bawaan berat ke lantai dua.",
  "始まる|はじまる|hajimaru|mulai / dimulai|Verb (Godan)|新しい学期が始まりました。|あたらしい がっき が はじまりました。|Semester baru telah dimulai.",
  "晴れる|はれる|hareru|cerah|Verb (Ichidan)|明日は晴れるといいですね。|あした は はれる と いい です ね。|Semoga besok cerah ya.",
  "冷える|ひえる|hieru|menjadi dingin|Verb (Ichidan)|夜になって空気が冷えてきました。|よる に なって くうき が ひえて きました。|Udara mulai mendingin saat malam tiba.",
  "冷やす|ひやす|hiyasu|mendinginkan|Verb (Godan)|ビールを冷蔵庫で冷やします。|ビール を れいぞうこ で ひやします。|Meninginkan bir di dalam kulkas.",
  "光る|ひかる|hikaru|bersinar / bercahaya|Verb (Godan)|夜空に星が光っています。|よぞら に ほし が ひかっています。|Bintang bersinar di langit malam.",
  "増える|ふえる|fueru|bertambah / meningkat|Verb (Ichidan)|日本語を学ぶ人が増えています。|にほんご を まなぶ ひと が ふえています。|Orang yang belajar bahasa Jepang meningkat.",
  "増やす|ふやす|fuyasu|menambah / meningkatkan|Verb (Godan)|貯金を少しずつ増やしています。|ちょきん を すこしずつ ふやしています。|Saya menambah tabungan sedikit demi sedikit.",
  "拭く|ふく|fuku|menyeka / mengelap|Verb (Godan)|テーブルの上を雑巾で拭きました。|テーブル の うえ を ぞうきん で ふきました。|Saya mengelap bagian atas meja dengan kain lap.",
  "褒める|ほめる|homeru|memuji|Verb (Ichidan)|テストで満点を取って褒められました。|テスト で まんてん を とって ほめられました。|Saya dipuji karena mendapat nilai sempurna saat ujian.",
  "参る|まいる|mairu|datang / pergi (rendah hati)|Verb (Godan)|明日、十時にそちらへ参ります。|あした、じゅうじ に そちら へ まいります。|Besok jam 10 saya akan datang ke sana.",
  "曲がる|まがる|magaru|berbelok / melengkung|Verb (Godan)|次の角を右に曲がってください。|つぎ の かど を みぎ に まがって ください。|Tolong belok kanan di pojokan berikutnya.",
  "守る|まもる|mamoru|melindungi / mematuhi|Verb (Godan)|法律や規則は守らなければなりません。|ほうりつ や きそく は まもらなければ なりません。|Kita harus mematuhi hukum dan peraturan.",
  "迷う|まよう|mayou|tersesat / ragu-ragu|Verb (Godan)|道に迷ってしまいました。|みち に まよって しまいました。|Saya tersesat di jalan.",
  "見える|みえる|mieru|terlihat|Verb (Ichidan)|ここから富士山が見えます。|ここ から ふじさん が みえます。|Gunung Fuji terlihat dari sini.",
  "見かける|みかける|mikakeru|kebetulan melihat / berpapasan|Verb (Ichidan)|駅で彼を見かけました。|えき で かれ を みかけました。|Saya kebetulan melihat dia di stasiun.",
  "見つかる|みつかる|mitsukaru|ditemukan|Verb (Godan)|失くした鍵が見つかりました。|なくした かぎ が みつかりました。|Kunci yang hilang telah ditemukan.",
  "迎える|むかえる|mukaeru|menjemput / menyambut|Verb (Ichidan)|空港へ友達を迎えに行きます。|くうこう へ ともだち を むかえ に いきます。|Saya pergi ke bandara untuk menjemput teman.",
  "戻す|もどす|modosu|mengembalikan (ke posisi awal)|Verb (Godan)|使った道具は元の場所に戻してください。|つかった どうぐ は もと の ばしょ に もどして ください。|Tolong kembalikan peralatan yang digunakan ke tempat semula.",
  "申し上げる|もうしあげる|moushiageru|mengatakan (rendah hati)|Verb (Ichidan)|心からお礼を申し上げます。|こころ から おれい を もうしあげます。|Saya menyampaikan terima kasih dari lubuk hati.",
  "焼く|やく|yaku|memanggang / membakar|Verb (Godan)|庭でバーベキューの肉を焼きます。|にわ で バーベキュー の にく を やきます。|Memanggang daging barbekyu di kebun.",
  "焼ける|やける|yakeru|terpanggang / terbakar|Verb (Ichidan)|パンが美味しく焼けました。|パン が おいしく やけました。|Rotinya sudah terpanggang dengan lezat.",
  "痩せる|やせる|yaseru|menjadi kurus|Verb (Ichidan)|ダイエットをして少し痩せました。|ダイエット を して すこし やせました。|Saya kurusan sedikit karena berdiet.",
  "辞める|やめる|yameru|berhenti (kerja/sekolah) / membatalkan|Verb (Ichidan)|会社を辞めることにしました。|かいしゃ を やめる こと に しました。|Saya memutuskan untuk berhenti dari perusahaan.",
  "やる|やる|yaru|melakukan / memberi makan|Verb (Godan)|犬にエサをやりました。|いぬ に エサ を やりました。|Saya memberi makan anjing.",
  "汚す|よごす|yogosu|mengotori|Verb (Godan)|靴を泥で汚してしまいました。|くつ を どろ で よごして しまいました。|Saya mengotori sepatu dengan lumpur.",
  "喜ぶ|よろこぶ|yorokobu|bergembira / senang|Verb (Godan)|プレゼントをあげたら彼はとても喜びました。|プレゼント を あげたら かれ は とても よろこびました。|Dia sangat gembira saat saya beri hadiah.",
  "沸く|わく|waku|mendidih|Verb (Godan)|お湯が沸きましたよ。|おゆ が わきました よ。|Air panasnya sudah mendidih lho.",
  "渡る|わたる|wataru|menyeberang|Verb (Godan)|横断歩道を渡りましょう。|おうだんほどう を わたりましょう。|Mari menyeberang di zebra cross.",
  "割る|わる|waru|memecahkan / membagi|Verb (Godan)|卵を割ってボウルに入れます。|たまご を わって ボウル に いれます。|Memecahkan telur lalu memasukkannya ke mangkuk."
];

const adjectivesCompact = [
  "嬉しい|うれしい|ureshii|senang / gembira|Adjective (I)|合格してとても嬉しいです。|ごうかく して とても うれしい です。|Saya sangat gembira karena lulus.",
  "悲しい|かなしい|kanashii|sedih|Adjective (I)|ペットが死んで悲しいです。|ペット が しんで かなしい です。|Saya sedih karena hewan peliharaan saya mati.",
  "恥ずかしい|はずかしい|hazukashii|malu|Adjective (I)|人前で間違えて恥ずかしかったです。|ひとまえ で まちがえて はずかしかった です。|Saya malu karena salah di depan umum.",
  "珍しい|めずらしい|mezurashii|langka / tidak biasa|Adjective (I)|この花はとても珍しい種類です。|この はな は とても メズラシイ しゅるい です。|Bunga ini adalah jenis yang sangat langka.",
  "厳しい|きびしい|kibishii|tegas / keras / galak|Adjective (I)|私たちの学校は規則が厳しいです。|わたし たち の がっこう は きそく が きびしい です。|Sekolah kami memiliki aturan yang tegas.",
  "優しい|やさしい|yasashii|baik hati / ramah|Adjective (I)|あの先生はいつも優しく教えてくれます。|あの せんせい は いつも やさしく おしえて くれます。|Guru itu selalu mengajar dengan baik hati.",
  "正しい|ただしい|tadashii|benar / tepat|Adjective (I)|正しい答えに丸をつけてください。|ただしい こたえ に まる を つけて ください。|Tolong beri tanda lingkaran pada jawaban yang benar.",
  "美しい|うつくしい|utsukushii|indah / cantik|Adjective (I)|山頂からの景色は美しかったです。|さんちょう から の けしき は うつくしかった です。|Pemandangan dari puncak gunung indah sekali.",
  "素晴らしい|すばらしい|subarashii|luar biasa / hebat|Adjective (I)|彼のバイオリンの演奏は素晴らしかったです。|かれ の バイオリン の えんそう は すばらしかった です。|Pertunjukan biola dia luar biasa hebat.",
  "詳しい|くわしい|kuwashii|detail / rinci / paham betul|Adjective (I)|彼は歴史についてとても詳しいです。|かれ は れきし について とても くわしい です。|Dia paham betul mengenai sejarah.",
  "深い|ふかい|fukai|dalam|Adjective (I)|この川は深いので泳いではいけません。|この かわ は ふかい ので およいでは いけません。|Sungai ini dalam, jadi tidak boleh berenang.",
  "浅い|あさい|asai|dangkal|Adjective (I)|このプールは浅いので子供でも安全です。|この プール は あさい ので こども でも あんぜん です。|Kolam ini dangkal jadi aman untuk anak-anak sekalipun.",
  "厚い|あつい|atsui|tebal (buku, kain, dll)|Adjective (I)|冬用に厚いコートを買いました。|ふゆよう に あつい コート を かいました。|Saya membeli mantel tebal untuk musim dingin.",
  "薄い|うすい|usui|tipis / hambar (rasa)|Adjective (I)|このスープは味が少し薄いです。|この スープ は あじ が すこし うすい です。|Sup ini rasanya agak sedikit hambar.",
  "悔しい|くやしい|kuyashii|menyesal / kesal (karena kalah)|Adjective (I)|試合に一敗して悔しいです。|しあい に いっぱい して くやしい です。|Saya kesal karena kalah satu kali dalam pertandingan.",
  "懐かしい|なつかしい|natsukashii|rindu / membuat nostalgia|Adjective (I)|古い写真を見てとても懐かしかったです。|ふるい しゃしん を みて とても なつかしかった です。|Melihat foto lama membuat saya sangat nostalgia.",
  "丁寧|ていねい|teinei|sopan / teliti|Adjective (Na)|彼はいつも丁寧な言葉遣いをします。|かれ は いつも ていねいな ことばづかい を します。|Dia selalu menggunakan pilihan kata yang sopan.",
  "複雑|ふくざつ|fukuzatsu|rumit / kompleks|Adjective (Na)|この問題は複雑すぎて解けません。|この もんだい は ふくざつ すぎて とけません。|Masalah ini terlalu rumit hingga tidak bisa diselesaikan.",
  "簡単|かんたん|kantan|mudah / simpel|Adjective (Na)|テストは思ったより簡単でした。|テスト は おもった より かんたん でした。|Ujiannya ternyata lebih mudah dari dugaan.",
  "安全|あんぜん|anzen|aman|Adjective (Na)|この踏切は安全対策がされています。|この ふみきり は あんぜん たいさく が されています。|Perlintasan kereta ini telah dipasangi pengaman.",
  "危険|きけん|kiken|bahaya|Adjective (Na)|夜遅くに一人で歩くのは危険です。|よる おそく に ひとり で あるく の は きけん です。|Berjalan sendirian saat larut malam adalah hal berbahaya.",
  "残念|ざんねん|zannen|sayang sekali / mengecewakan|Adjective (Na)|雨で遠足が中止になって残念です。|あめ で えんそく が ちゅうし に なって ざんねん です。|Sayang sekali karyawisata dibatalkan karena hujan.",
  "無理|むり|muri|mustahil / memaksakan diri|Adjective (Na)|そんなに無理をしないでください。|そんな に むり を しないで ください。|Tolong jangan memaksakan diri seperti itu.",
  "必要|ひつよう|hitsuyou|perlu / butuh|Adjective (Na)|ビザの申請には写真が必要になります。|ビザ の しんせい には しゃしん が ひつよう に なります。|Pasfoto akan diperlukan untuk pengajuan visa.",
  "特別|tokubetsu|tokubetsu|khusus / istimewa|Adjective (Na)|今日は私たちの特別な記念日です。|きょう は わたし たち の とくべつな きねんび です。|Hari ini adalah hari peringatan khusus kami.",
  "不便|ふべん|fuben|tidak praktis / menyusahkan|Adjective (Na)|駅から遠いので生活が少し不便です。|えき から とおい ので せいかつ が すこし ふべん です。|Hidup agak sedikit tidak praktis karena jauh dari stasiun.",
  "親切|しんせつ|shinsetsu|ramah / baik hati|Adjective (Na)|近所の人はみんな親切です。|きんじょ の ひと は みんな しんせつ です。|Tetangga semuanya ramah.",
  "邪魔|じゃま|jama|mengganggu / penghalang|Adjective (Na)|通り道に車を置くと邪魔になります。|とおりみち に くるま を おくと じゃま に なります。|Akan menjadi penghalang jika meletakkan mobil di jalur lewat.",
  "楽|らく|raku|nyaman / mudah|Adjective (Na)|この靴はとても軽くて歩くのが楽です。|この くつ は とても かるくて あるく の が らく です。|Sepatu ini sangat ringan dan nyaman untuk berjalan.",
  "適当|てきとう|tekitou|cocok / sesuai|Adjective (Na)|自分に適当な仕事を見つけました。|じぶん に てきとうな しごと を みつけました。|Saya menemukan pekerjaan yang cocok bagi saya.",

  // NEW N4 ADJECTIVES TO EXPAND TO 65 ADJECTIVES
  "甘い|あまい|amai|manis|Adjective (I)|このお菓子はとても甘いです。|この おかし は とても あまい です。|Kue ini sangat manis.",
  "辛い|からい|karai|pedas|Adjective (I)|私は辛い食べ物が大好きです。|わたし は からい たべもの が だいすき です。|Saya sangat suka makanan pedas.",
  "塩辛い|しおからい|shiokarai|asin|Adjective (I)|このスープは少し塩辛いです。|この スープ は すこし しおからい です。|Sup ini agak sedikit asin.",
  "酸っぱい|すっぱい|suppai|asam|Adjective (I)|レモンは酸っぱい味がします。|レモン は すっぱい あじ が します。|Lemon memiliki rasa asam.",
  "苦い|にがい|nigai|pahit|Adjective (I)|良薬は口に苦しと言います。|りょうやく は くち に にがし と いいます。|Ada pepatah mengatakan obat mujarab rasanya pahit.",
  "おかしい|おかしい|okashii|aneh / lucu|Adjective (I)|彼の冗談はとてもおかしいです。|かれ の じょうだん は とても おかしい です。|Leluconnya sangat lucu.",
  "苦しい|くるしい|kurushii|menderita / sesak / sulit|Adjective (I)|走った後、息が苦しいです。|はしった あと、いき が くるしい です。|Napas terasa sesak setelah berlari.",
  "細かい|こまかい|komakai|kecil / rinci / uang receh|Adjective (I)|細かいお金を持っていません。|こまかい おかね を もっていません。|Saya tidak membawa uang receh.",
  "寂しい|さびしい|sabishii|sepi / kesepian|Adjective (I)|一人暮らしは少し寂しいです。|ひとりぐらし は すこし さびしい です。|Hidup sendirian agak sedikit sepi.",
  "近い|ちかい|chikai|dekat|Adjective (I)|私の家は駅からとても近いです。|わたし の いえ は えき から とても ちかい です。|Rumah saya sangat dekat dari stasiun.",
  "つまらない|つまらない|tsumaranai|membosankan / tidak menarik|Adjective (I)|この映画はつまらなかったです。|この えいが は つまらなかった です。|Film ini membosankan.",
  "眠い|ねむい|nemui|mengantuk|Adjective (I)|ゆうべ遅かったので、今日は眠いです。|ゆうべ おそかった ので、きょう は ねむい です。|Saya mengantuk hari ini karena tadi malam tidur larut.",
  "ひどい|ひどい|hidoi|kejam / parah / buruk sekali|Adjective (I)|彼はひどい嘘をつきました。|かれ は ひどい うそ を つきました。|Dia telah berbohong dengan sangat buruk.",
  "欲しい|ほしい|hoshii|ingin / menginginkan (barang)|Adjective (I)|新しいパソコンが欲しいです。|あたらしい パソコン が ほしい です。|Saya ingin laptop baru.",
  "よろしい|よろしい|yoroshii|boleh / baik (formal)|Adjective (I)|お名前を伺ってもよろしいですか。|おなまえ を うかがっても よろしい です か。|Bolehkah saya menanyakan nama Anda?",
  "大人しい|おとなしい|otonashii|pendiam / penurut / tenang|Adjective (Na)|彼は大人しい性格の子供です。|かれ は おとなしい せいかく の こども です。|Dia adalah anak dengan kepribadian yang tenang.",
  "賢い|かしこい|kashikoi|pintar / cerdas|Adjective (I)|あの犬はとても賢いですね。|あの いぬ は とても かしこい です ね。|Anjing itu sangat cerdas ya.",
  "幸せ|しあわせ|shiawase|bahagia|Adjective (Na)|家族と一緒に過ごせて幸せです。|かぞく と いっしょ に すごせて しあわせ です。|Saya bahagia bisa menghabiskan waktu bersama keluarga.",
  "新鮮|しんせん|shinsen|segar (makanan/udara)|Adjective (Na)|市場で新鮮な魚を買いました。|いちば で しんせんな さかな を かいました。|Saya membeli ikan segar di pasar.",
  "熱心|ねっしん|nesshin|tekun / antusias / rajin|Adjective (Na)|彼女は日本語を熱心に勉強しています。|かのじょ は にほんご を ねっしんに べんきょう しています。|Dia belajar bahasa Jepang dengan rajin.",
  "真面目|まじめ|majime|serius / jujur / rajin|Adjective (Na)|彼は真面目な学生で毎日予習します。|かれ は まじめな がくせい で まいにち よしゅう します。|Dia adalah siswa yang rajin dan bersiap setiap hari.",
  "有名|ゆうめい|yuumei|terkenal / populer|Adjective (Na)|ここは観光地として有名な場所です。|ここ は かんこうち として ゆうめいな ばしょ です。|Tempat ini terkenal sebagai destinasi wisata.",
  "立派|りっぱ|rippa|megah / mulia / hebat|Adjective (Na)|彼は立派な大人になりました。|かれ は りっぱな おとな に なりました。|Dia telah tumbuh menjadi orang dewasa yang hebat.",
  "暗い|くらい|kurai|gelap / suram|Adjective (I)|部屋が暗いので電気をつけてください。|へや が くらい ので でんき を つけて ください。|Tolong nyalakan lampu karena kamarnya gelap.",
  "明るい|あかるい|akarui|terang / ceria|Adjective (I)|彼女はいつも明るい笑顔を見せます。|かのじょ は いつも あかるい えがお を みせます。|Dia selalu menunjukkan senyum yang ceria.",
  "汚い|きたない|kitanai|kotor / jorok|Adjective (I)|手が汚いので洗ってから食べます。|て が きたない ので あらって から たべます。|Mencuci tangan sebelum makan karena tangan kotor.",
  "危ない|あぶない|abunai|bahaya|Adjective (I)|道で遊ぶのは危ないです。|みち で あそぶ の は あぶない です。|Bermain di jalanan itu berbahaya.",
  "酷い|ひどい|hidoi|parah / buruk sekali|Adjective (I)|酷い風邪をひいてしまいました。|ひどい かぜ を ひいて しまいました。|Saya tidak sengaja terkena flu parah.",
  "若い|わかい|wakai|muda|Adjective (I)|私の両親はまだ若くて元気です。|わたし の りょうしん は まだ わかくて げんき です。|Orang tua saya masih muda dan sehat.",
  "長い|ながい|nagai|panjang|Adjective (I)|夏休みは長くて楽しいです。|なつやすみ は ながくて たのしい です。|Liburan musim panas panjang dan menyenangkan.",
  "短い|みじかい|mijikai|pendek|Adjective (I)|髪を短く切りました。|かみ を みじかく きりました。|Saya memotong rambut menjadi pendek.",
  "重い|おもい|omoi|berat|Adjective (I)|この荷物は重くて持てません。|この にもつ は おもくて もてません。|Barang bawaan ini berat dan tidak bisa saya bawa.",
  "軽い|かるい|karui|ringan|Adjective (I)|この素材は軽くて丈夫です。|この そざい は かるくて じょうぶ です。|Bahan ini ringan dan kuat/awet.",
  "広い|ひろい|hiroi|luas|Adjective (I)|公園の芝生は広くて気持ちいいです。|こうえん の しばふ は ひろくて きもちいい です。|Rumput taman luas dan nyaman/sejuk.",
  "狭い|せまい|semai|sempit|Adjective (I)|この部屋は少し狭いですね。|この へや は すこし せまい です ね。|Kamar ini agak sedikit sempit ya."
];

const adverbsCompact = [
  "急に|きゅうに|kyuu ni|tiba-tiba|Adverb|空が急に暗くなって雨が降ってきました。|そら が きゅうに くらくなって あめ が ふって きました。|Langit tiba-tiba menggelap dan mulai turun hujan.",
  "非常に|ひじょうに|hijo ni|sangat / amat|Adverb|今年の夏は非常に暑いですね。|ことし の なつ は ひじょうに あつい です ね。|Musim panas tahun ini sangat panas sekali ya.",
  "ほとんど|ほとんど|hotondo|hampir seluruhnya|Adverb|宿題はほとんど終わりました。|しゅくだい は ほとんど おわりました。|PR hampir seluruhnya selesai.",
  "ずいぶん|ずいぶん|zuibun|lumayan / sangat|Adverb|日本語がずいぶん上手になりましたね。|にほんご が ずいぶん じょうず に なりました ね。|Bahasa Jepang Anda sudah lumayan mahir ya.",
  "やっと|やっと|yatto|akhirnya (setelah bersusah payah)|Adverb|難しい試験にやっと合格しました。|むずかしい しけん に やっと ごうかくしました。|Akhirnya saya lulus ujian yang sulit.",
  "とうとう|とうとう|toutou|akhirnya|Adverb|十年間住んだアパートをとうとう引っ越しました。|じゅうねんかん すんだ アパート を とうとう ひっこしました。|Akhirnya saya pindah dari apartemen yang ditinggali 10 tahun.",
  "必ず|かならず|kanarazu|pasti / harus / selalu|Adverb|約束は必ず守ってください。|やくそく は かならず まもって ください。|Tolong pastikan Anda menepati janji.",
  "ぜひ|ぜひ|zehi|tentu saja / sangat (ajakan)|Adverb|今度ぜひ私の家に遊びに来てください。|こんど ぜひ わたし の いえ に あそび に きて ください。|Kapan-kapan, tentu saja Anda harus datang main ke rumah saya.",
  "たぶん|たぶん|tabun|mungkin / barangkali|Adverb|明日はたぶん雨になるでしょう。|あした は たぶん あめ に なる でしょう。|Besok mungkin akan turun hujan.",
  "しばらく|しばらく|shibaraku|sementara waktu / beberapa lama|Adverb|しばらくここで待っていてください。|しばらく ここ で まっていて ください。|Tolong tunggu di sini sementara waktu.",
  "はっきり|はっきり|hakkiri|dengan jelas|Adverb|私の顔をはっきり見て話してください。|わたし の かお を はっきり みて はなして ください。|Tolong tatap wajah saya dengan jelas ketika berbicara.",
  "のんびり|のんびり|nonbiri|secara santai|Adverb|週末は家でのんびり過ごします。|しゅうまつ は いえ で のんびり すごします。|Saya menghabiskan akhir pekan secara santai di rumah.",
  "そろそろ|そろそろ|sorosoro|perlahan-lahan / sebentar lagi|Adverb|時間なので、そろそろ失礼します。|じかん なので、そろそろ しつれい します。|Karena sudah waktunya, sebentar lagi saya mohon pamit.",
  "どんどん|どんどん|dondon|dengan cepat / berturut-turut|Adverb|日本語がどんどん上達していますね。|にほんご が どんどん じょうたつ しています ね。|Bahasa Jepang Anda meningkat dengan cepat ya.",
  "お疲れ様でした|おつかれさまでした|otsukaresama deshita|terima kasih atas kerja kerasnya|Expression|皆さん、今日の会議はお疲れ様でした。|みなさん、きょう の かいぎ は おつかれさまでした。|Semuanya, terima kasih atas kerja kerasnya pada rapat hari ini.",
  "お先に失礼します|おさきにしつれいします|osaki ni shitsurei shimasu|permisi pulang duluan|Expression|用事があるので、お先に失礼します。|ようじ が ある ので、おさき に しつれい します。|Saya permisi pulang duluan karena ada keperluan.",
  "おかげさまで|おかげさまで|okagesama de|berkat doa Anda (Alhamdulillah)|Expression|おかげさまで、体調が良くなりました。|おかげさまで、たいちょう が よく なりました。|Berkat doa Anda, kondisi kesehatan saya sudah membaik.",
  "実は|じつは|jitsu wa|sebenarnya|Expression|実は、明日から日本へ旅行に行きます。|じつは、あした から にほん へ りょこう に いきます。|Sebenarnya, mulai besok saya akan berwisata ke Jepang.",
  "もちろん|もちろん|mochiron|tentu saja|Expression|もちろん、私も手伝いますよ。|もちろん、わたし も てつだいます よ。|Tentu saja, saya juga akan membantu.",
  "いかがですか|いかがですか|ikaga desu ka|bagaimana?|Expression|温かいお茶はいかがですか。|あたたかい おちゃ は いかが です か。|Bagaimana kalau minum teh hangat?",

  // NEW N4 ADVERBS TO EXPAND TO 50 ADVERBS
  "あまり|あまり|amari|tidak begitu / tidak terlalu|Adverb|最近はあまり忙しくありません。|さいきん は あまり いそがしく ありません。|Akhir-akhir ini saya tidak terlalu sibuk.",
  "いかが|いかが|ikaga|bagaimana (sopan)|Adverb|日本の料理はいかがですか。|にほん の りょうり は いかが です か。|Bagaimana cita rasa masakan Jepang?",
  "いくら|いくら|ikura|berapa pun / meskipun berapa|Adverb|いくら高くても、この辞書を買います。|いくら たかくても、この じしょ を かいます。|Meskipun mahal berapa pun, saya akan membeli kamus ini.",
  "一生懸命|いっしょうけんめい|isshoukenmei|dengan sungguh-sungguh|Adverb|一生懸命日本語を練習しています。|いっしょうけんめい にほんご を れんしゅう しています。|Saya sedang berlatih bahasa Jepang dengan sungguh-sungguh.",
  "決して|けっして|kesshite|sekali-kali tidak / tidak pernah|Adverb|この秘密を決して誰にも言わないでください。|この ひみつ を けっして だれ にも いわないで ください。|Tolong jangan sekali-kali membocorkan rahasia ini kepada siapapun.",
  "この間|このあいだ|kono aida|tempo hari / baru-baru ini|Adverb|この間、駅の近くで彼と会いました。|このあいだ、えき の ちかく で かれ と あいました。|Tempo hari saya bertemu dengannya di dekat stasiun.",
  "これから|これから|kore kara|mulai sekarang / dari sekarang|Adverb|これからもっと頑張って勉強します。|これから もっと がんばって べんきょう します。|Mulai sekarang saya akan belajar lebih keras lagi.",
  "さっき|さっき|sakki|tadi / baru saja|Adverb|さっき彼が事務所に来ました。|さっき かれ が じむしょ に きました。|Tadi dia datang ke kantor.",
  "すっかり|すっかり|sukkari|sepenuhnya / seluruhnya|Adverb|桜の葉がすっかり落ちてしまいました。|さくら の は が すっかり おちて しまいました。|Daun sakura sudah sepenuhnya berguguran.",
  "ずっと|ずっと|zutto|jauh lebih / terus-menerus|Adverb|彼の方が私よりずっと背が高いです。|かれ の ほう が わたし より ずっと せ が たかい です。|Dia jauh lebih tinggi daripada saya.",
  "全然|ぜんぜん|zenzen|sama sekali tidak|Adverb|昨日のテストは全然できませんでした。|きのう の テスト は ぜんぜん できません でした。|Ujian kemarin sama sekali tidak bisa saya kerjakan.",
  "大抵|たいてい|taitei|biasanya / umumnya|Adverb|日曜日には大抵家で休んでいます。|にちようび には たいてい いえ で やすんでいます。|Hari Minggu biasanya saya beristirahat di rumah.",
  "だいぶ|だいぶ|daibu|lumayan / sebagian besar|Adverb|病気はだいぶ良くなりました。|びょうき は だいぶ よく なりました。|Penyakitnya sudah lumayan membaik.",
  "ちっとも|ちっとも|chittomo|sedikit pun tidak|Adverb|その本はちっとも面白くありません。|その ほん は ちっとも おもしろく ありません。|Buku itu sedikit pun tidak menarik.",
  "ちょうど|ちょうど|choudo|pas / tepat / baru saja|Adverb|ちょうど十二時になったところです。|ちょうど じゅうにじ に なった ところ です。|Tepat baru saja menunjukkan jam 12.",
  "ついに|ついに|tsui ni|akhirnya (setelah proses panjang)|Adverb|彼はついに新しい小説を書き終えました。|かれ は ついに あたらしい しょうせつ を かきおえました。|Dia akhirnya selesai menulis novel baru.",
  "特に|とくに|toku ni|khususnya / terutama|Adverb|日本の果物では特にイチゴが好きです。|にほん の くだもの では とくに イチゴ が すき です。|Di antara buah-buahan Jepang, saya terutama suka stroberi.",
  "なるべく|なるべく|narebeku|sebisa mungkin|Adverb|なるべく毎日漢字を練習してください。|なるべく まいにち かんじ を れんしゅう してください。|Tolong sebisa mungkin berlatih kanji setiap hari.",
  "もし|もし|moshi|jika / seandainya|Adverb|もし明日雨なら、旅行は中止です。|もし あした あめ なら、りょこう は ちゅうし です。|Jika besok hujan, perjalanannya dibatalkan.",
  "やはり|やはり|yahari|tetap saja / seperti dugaan|Adverb|やはり彼は約束を守りませんでした。|やはり かれ は やくそく を まもりませんでした。|Seperti dugaan, dia tetap saja tidak menepati janji.",
  "おかしいな|おかしいな|okashii na|aneh ya...|Expression|鍵がない、おかしいな。|かぎ が ない、おかしい な。|Kuncinya tidak ada, aneh ya...",
  "しばらくでした|しばらくでした|shibaraku deshita|sudah lama tidak jumpa|Expression|山田さん、しばらくでしたね。|やまだ さん、しばらく でした ね。|Yamada-san, sudah lama tidak berjumpa ya.",
  "失礼します|しつれいします|shitsurei shimasu|permisi / mohon maaf|Expression|お先に失礼します。|おさき に しつれい します。|Saya permisi pulang duluan.",
  "どうぞお元気で|どうぞおげんきで|douzo ogenki de|semoga sehat selalu|Expression|遠くへ行っても、どうぞお元気で。|とおく へ いっても、どうぞ おげんき で。|Meskipun pergi jauh, semoga sehat selalu ya.",
  "どうも|どうも|doumo|terima kasih / salam|Expression|どうもありがとうございました。|どうも ありがとう ございました。|Terima kasih banyak.",
  "いってらっしゃい|いてらっしゃい|itte rasshai|selamat jalan / hati-hati di jalan|Expression|仕事、いってらっしゃい！|しごと、いってらっしゃい！|Selamat jalan bekerja!",
  "いってきます|いってきます|itte kimasu|saya berangkat dulu|Expression|学校へいってきます。|がっこう へ いってきます。|Saya berangkat ke sekolah dulu.",
  "ただいま|ただいま|tadaima|saya pulang / baru kembali|Expression|今、家に帰りました。ただいま！|いま、いえ に かえりました。ただいま！|Saya baru pulang ke rumah. Saya pulang!",
  "おかえりなさい|おかえりなさい|okaeri nasai|selamat datang kembali di rumah|Expression|お疲れ様でした。おかえりなさい！|おつかれさまでした。おかえりなさい！|Terima kasih atas kerja kerasnya. Selamat datang kembali!",
  "おめでとうございます|おめでとうございます|omedetou gozaimasu|selamat!|Expression|お誕生日おめでとうございます！|おたんじょうび おめでとう ございます！|Selamat hari ulang tahun!"
];

// Expanded thematic nouns covering Genki II & Minna No Nihongo II (120 words)
const nounsCompact1 = [
  "医者|いしゃ|isha|dokter|Noun|病気になったので、医者に見てもらいました。|びょうき に なった ので、いしゃ に みて もらいました。|Saya memeriksakan diri ke dokter karena sakit.",
  "準備|じゅんび|junbi|persiapan|Noun|会議の準備が全て整いました。|かいぎ の じゅんび が すべて ととのいました。|Persiapan rapat telah sepenuhnya selesai.",
  "計画|けいかく|keikaku|rencana / perencanaan|Noun|夏休みの旅行計画を立てています。|なつやすみ の りょこう けいかく を たてています。|Saya sedang menyusun rencana perjalanan liburan musim panas.",
  "説明|せつめい|setsumei|penjelasan / keterangan|Noun|彼の説明は簡潔で分かりやすいです。|かれ の せつめい は かんけつ で わかりやすい です。|Penjelasan dia singkat padat dan mudah dipahami.",
  "空港|くうこう|kuukou|bandara|Noun|空港までタクシーで行きます。|くうこう まで タクシー で いきます。|Saya pergi ke bandara menggunakan taksi.",
  "予約|よやく|yoyaku|reservasi / pemesanan|Noun|人気レストランなので予約が必要です。|にんき レストラン なので よやく が ひつよう です。|Karena restoran populer, diperlukan pemesanan terlebih dahulu.",
  "外国語|がいこくご|gaikokugo|bahasa asing|Noun|外国語を勉強するのは面白いです。|がいこくご を べんきょう する の は おもしろい です。|Belajar bahasa asing sangatlah menarik.",
  "結果|けっか|kekka|hasil|Noun|試験の結果がメールで送られてきました。|しけん の けっか が メール で おくられて きました。|Hasil ujian telah dikirimkan via email.",
  "社会|しゃかい|shakai|masyarakat / sosial|Noun|現代の社会問題について議論しました。|げんだい の しゃかい もんだい について ぎろん しました。|Kami mendiskusikan isu sosial masyarakat modern.",
  "環境|かんきょう|kankyou|lingkungan|Noun|私たちは地球の環境を守らなければなりません。|わたし たち は ちきゅう の かんきょう を まもらなければ なりません。|Kita harus melindungi lingkungan bumi.",
  "気持ち|きもち|kimochi|perasaan / suasana hati|Noun|散歩をすると気持ちが良いです。|さんぽ を する と きもち が いい です。|Berjalan-jalan membuat perasaan menjadi tenang/nyaman.",
  "丁寧|ていねい|teinei|sopan santun|Noun|お客様には丁寧な対応を心がけています。|おきゃくさま には ていねいな たいおう を こころがけて います。|Kami mengutamakan pelayanan sopan santun kepada pelanggan.",
  "複雑|ふくざつ|fukuzatsu|kerumitan|Noun|都会の交通システムは複雑です。|とかい の こうつう システム は ふくざつ です。|Sistem transportasi kota metropolitan sangat rumit.",
  "遅刻|ちこく|chikoku|keterlambatan|Noun|遅刻の理由を教えてください。|ちこく の りゆう を おしえて ください。|Tolong beritahu alasan keterlambatan Anda.",
  "運転|うんてん|unten|pengemudian / menyetir|Noun|長時間の運転は疲れます。|ちょうじかん の うんてん は つかれます。|Menyetir dalam waktu lama melelahkan.",
  "朝食|ちょうしょく|choushoku|sarapan pagi|Noun|健康のために毎朝朝食を食べます。|けんこう の ため に まいあさ ちょうしょく を たべます。|Saya sarapan pagi setiap hari demi kesehatan.",
  "材料|ざいりょう|zairyou|bahan baku / material|Noun|この料理の材料を買ってきました。|この りょうり の ざいりょう を かって きました。|Saya telah membeli bahan makanan untuk masakan ini.",
  "生活費|せいかつひ|seikatsuhi|biaya hidup|Noun|生活費を節約するために自炊しています。|せいかつひ を せつやく する ため に じすい しています。|Saya memasak sendiri untuk menghemat biaya hidup.",
  "習慣|しゅうかん|shuukan|kebiasaan / adat|Noun|朝早く起きる習慣をつけたいです。|あさ はやく おきる しゅうかん を つけたい です。|Saya ingin membiasakan kebiasaan bangun pagi.",
  "祖父|そふ|sofu|kakek (pihak sendiri)|Noun|私の祖父は今年で八十歳になります。|わたし の そふ は ことし で はちじゅっさい に なります。|Kakek saya akan berusia 80 tahun tahun ini.",
  "兄弟|きょうだい|kyoudai|saudara kandung / kakak adik|Noun|私には兄弟が三人います。|わたし には きょうだい が さんにん います。|Saya memiliki tiga orang saudara kandung.",
  "普及|ふきゅう|fukyuu|penyebaran / popularitas umum|Noun|スマートフォンの普及は素晴らしいです。|スマートフォン の ふきゅう は すばらしい です。|Penyebaran ponsel pintar sangatlah luar biasa.",
  "保存|ほぞん|hozon|penyimpanan / pengawetan|Noun|データをUSBに保存しました。|データ を USB に ほぞん しました。|Saya telah menyimpan data ke USB.",
  "景色|けしき|keshiki|pemandangan|Noun|ホテルの窓から見た景色は最高でした。|ホテル の まど から みた けしき は さいこう でした。|Pemandangan dari jendela hotel sangatlah luar biasa.",
  "住民|じゅうみん|juumin|penduduk / warga lokal|Noun|地域の住民が集まってイベントを行いました。|ちいき の じゅうみん が あつまって イベント を おこないました。|Warga lokal berkumpul mengadakan sebuah acara.",
  "意見|いけん|iken|pendapat / opini|Noun|会議で自分の意見をはっきり言いました。|かいぎ で じぶん の いけん を はっきり いいました。|Saya mengutarakan pendapat saya dengan jelas di rapat.",
  "簡潔|かんけつ|kanketsu|kepadatan / kesingkatan|Noun|簡潔な文章で報告書を書きました。|かんけつな ぶんしょう で ほうこくしょ を かきました。|Saya menulis laporan dengan kalimat yang singkat padat.",
  "出発|しゅっぱつ|shuppatsu|keberangkatan|Noun|バスの出発時間は朝八時です。|バス の しゅっぱつ じかん は あさ はちじ です。|Waktu keberangkatan bus adalah jam 8 pagi.",
  "心配|しんぱい|shinpai|kekhawatiran|Noun|親は常に子供の心配をしています。|おや は つねに こども の しんぱい を しています。|Orang tua selalu memiliki kekhawatiran terhadap anaknya.",
  "技術|ぎじゅつ|gijutsu|teknologi / teknik|Noun|日本の科学技術は進歩しています。|にほん の かがくぎじゅつ は しんぽ しています。|Ilmu pengetahuan dan teknologi Jepang terus maju.",
  "政治|せいじ|seiji|politik|Noun|大学生は政治に関心を持つべきです。|だいがくせい は せいじ に かんしん を もつべき です。|Mahasiswa sebaiknya memiliki ketertarikan pada politik.",
  "経済|けいざい|keizai|ekonomi|Noun|世界経済のニュースを毎朝チェックします。|せかいけいざい の ニュース を まいあさ チェック します。|Memeriksa berita ekonomi dunia setiap pagi.",
  "法律|ほうりつ|houritsu|hukum / undang-undang|Noun|法律を守るのは市民の義務です。|ほうりつ を ままおる の は しみん の ぎむ です。|Mematuhi hukum adalah kewajiban warga negara.",
  "恋人|こいびと|koibito|pacar / kekasih|Noun|クリスマスを恋人と過ごしました。|クリスマス を こいびと と すごしました。|Saya menghabiskan hari Natal bersama pacar.",
  "夫婦|ふうふ|fuufu|suami istri|Noun|彼らは仲が良い夫婦です。|かれら は なか が いい ふうふ です。|Mereka adalah pasangan suami istri yang rukun.",
  "親戚|しんせき|shinseki|kerabat / saudara sepupu/ipar dll|Noun|お正月は親戚が集まります。|おしょうがつ は しんせき が あつまります。|Kerabat berkumpul pada hari Tahun Baru.",
  "社長|しゃちょう|shachou|direktur utama / bos|Noun|社長に新しい計画書を提出しました。|しゃちょう に あたらしい けいかくしょ を ていしゅつ します。|Saya menyerahkan draf rencana baru kepada direktur.",
  "公務員|こうむいん|koumuin|pegawai negeri sipil (PNS)|Noun|姉は公務員として市役所で働いています。|あね は こうむいん として しやくしょ で はたらいています。|Kakak perempuan saya bekerja di balai kota sebagai PNS.",
  "看護師|かんごし|kangoshi|perawat|Noun|病院で優しい看護師さんに手当てをしてもらいました。|びょういん で やさしい かんごしさん に てあて を して もらいました。|Saya dirawat oleh perawat ramah di rumah sakit.",
  "小説|しょうせつ|shousetsu|novel|Noun|日本の有名な小説を読んでいます。|にほん の ゆうめいな しょうせつ を よんでいます。|Saya sedang membaca novel Jepang yang terkenal.",
  "天気予報|てんきよほう|tenkiyohou|prakiraan cuaca|Noun|毎朝、天気予報を確認してから外出します。|まいあさ、てんきよほう を かくにん して から がいしゅつ します。|Setiap pagi saya memeriksa prakiraan cuaca sebelum bepergian.",
  "火事|かじ|kaji|kebakaran|Noun|近所で大きな火事がありました。|きんじょ で おおきな かじ が ありました。|Telah terjadi kebakaran besar di sekitar rumah.",
  "事故|じこ|jiko|kecelakaan|Noun|交差点で交通事故を目撃しました。|こうさてん で こうつうじこ を もくげき しました。|Saya menyaksikan kecelakaan lalu lintas di persimpangan.",
  "予定|よてい|yotei|jadwal / rencana acara|Noun|今日の予定をカレンダーに書き込みました。|きょう の よてい を カレンダー に かきこみました。|Saya menulis jadwal hari ini pada kalender.",
  "相手|あいて|aite|lawan bicara / mitra / partner|Noun|話をするときは相手の目を見てください。|はなし を する とき は あいて の め を みて ください。|Tataplah mata lawan bicara Anda ketika berbicara.",
  "留学生|りゅうがくせい|ryuugakusei|mahasiswa asing / siswa internasional|Noun|私たちのクラスにはたくさんの留学生がいます。|わたし たち の クラス には たくさん の りゅうがくせい が います。|Ada banyak mahasiswa asing di kelas kami.",
  "実験|じっけん|jikken|eksperimen / uji coba|Noun|理科 of 授業で化学の実験を行いました。|りか の じゅぎょう で かがく の じっけん を おこないました。|Kami melakukan eksperimen kimia di kelas sains.",
  "泥棒|どろぼう|dorobou|pencuri / maling|Noun|家の中に泥棒が入って警察を呼びました。|いえ の なか に どろぼう が はいって けいさつ を よびました。|Seorang pencuri masuk ke dalam rumah sehingga kami memanggil polisi.",
  
  // NEW N4 NOUNS FOR NOUNS_COMPACT_1 (EXPAND TO 120 NOUNS)
  "秋|あき|aki|musim gugur|Noun|日本の秋は紅葉がとても綺麗です。|にほん の あき は もみじ が とても きれい です。|Musim gugur di Jepang daun-daun momijinya sangat indah.",
  "味|あじ|aji|rasa|Noun|この料理はどんな味がしますか。|この りょうり は どんな あじ が します か。|Makanan ini rasanya seperti apa?",
  "遊び|あそび|asobi|permainan / liburan / hiburan|Noun|子供にとって遊びはとても大切です。|こども にとって あそび は とても たいせつ です。|Bagi anak-anak, bermain sangatlah penting.",
  "頭|あたま|atama|kepala|Noun|頭が痛いので薬を飲みました。|あたま が いたい ので くすり を のみました。|Saya minum obat karena kepala saya pusing.",
  "姉|あね|ane|kakak perempuan (sendiri)|Noun|私の姉は銀行で働いています。|わたし の あね は ぎんこう で はたらいています。|Kakak perempuan saya bekerja di bank.",
  "兄|あに|ani|kakak laki-laki (sendiri)|Noun|私の兄は英語の先生です。|わたし の あに は えいご の せんせい です。|Kakak laki-laki saya adalah guru bahasa Inggris.",
  "アパート|アパート|apaato|apartemen|Noun|駅から近いアパートに住んでいます。|えき から ちかい アパート に すんでいます。|Saya tinggal di apartemen dekat stasiun.",
  "従姉妹|いとこ|itoko|saudara sepupu|Noun|週末に従姉妹が家に遊びに来ます。|しゅうまつ に いとこ が いえ に あそび に きます。|Akhir pekan ini saudara sepupu saya akan datang main ke rumah.",
  "意味|いみ|imi|arti / makna|Noun|この漢字の意味を教えてください。|この かんじ の いみ を おしえて ください。|Tolong beritahu arti dari kanji ini.",
  "妹|いもうと|imouto|adik perempuan (sendiri)|Noun|妹は来年高校生になります。|いもうと は らいねん こうこうせい に なります。|Adik perempuan saya akan menjadi anak SMA tahun depan.",
  "入口|いりぐち|iriguchi|pintu masuk|Noun|ホテルの入り口で待ち合わせましょう。|ホテル の いりぐち で まちあわせましょう。|Mari bertemu di pintu masuk hotel.",
  "おもちゃ|おもちゃ|omocha|mainan|Noun|子供におもちゃを買ってあげました。|こども に おもちゃ を かって あげました。|Saya membelikan mainan untuk anak.",
  "思い出|おもいで|omoide|kenangan|Noun|高校生活は良い思い出です。|こうこう せいかつ は よい おもいで です。|Kehidupan SMA adalah kenangan yang indah.",
  "音楽|おんがく|ongaku|musik|Noun|私は毎晩音楽を聴きながら寝ます。|わたし は まいばん おんがく を きき ながら ねます。|Saya tidur sambil mendengarkan musik setiap malam.",
  "会話|かいわ|kaiwa|percakapan / obrolan|Noun|日本語の会話の練習をしましょう。|にほんご の かいわ の れんしゅう を しましょう。|Mari berlatih percakapan bahasa Jepang.",
  "帰り|かえり|kaeri|kepulangan / jalan pulang|Noun|仕事の帰りにスーパーに寄りました。|しごと の かえり に スーパー に よりました。|Saya mampir ke supermarket di jalan pulang kerja.",
  "鏡|かがみ|kagami|cermin|Noun|鏡を見てネクタイを直しました。|かがみ を みて ネクタイ を なおしました。|Saya merapikan dasi sambil melihat cermin.",
  "科学|かがく|kagaku|sains / ilmu pengetahuan|Noun|科学の進歩は私たちの生活を豊かにします。|かがく の しんぽ は わたし たち の せいかつ を ゆたかに します。|Kemajuan sains memperkaya kehidupan kita.",
  "家事|かじ|kaji|pekerjaan rumah tangga|Noun|週末はいつも家事で忙しいです。|しゅうまつ は いつも かじ で いそがしい です。|Akhir pekan selalu sibuk dengan pekerjaan rumah tangga.",
  "形|かたち|katachi|bentuk|Noun|この石は変わった形をしていますね。|この いし は かわった かたち を しています ね。|Batu ini memiliki bentuk yang aneh ya.",
  "金|かね|kane|uang / logam mulia / bel|Noun|お金を大切に使ってください。|おかね を たいせつ に つかって ください。|Tolong gunakan uang dengan hemat/bijaksana.",
  "壁|かべ|kabe|dinding / tembok|Noun|壁に綺麗な絵を掛けました。|かべ に きれいな え を かけました。|Saya menggantung lukisan indah di dinding.",
  "髪|かみ|kami|rambut|Noun|美容院で髪を短く切りました。|びよういん で かみ を みじかく きりました。|Saya memotong rambut menjadi pendek di salon.",
  "神様|かみさま|kamisama|Tuhan / Dewa|Noun|神様に日々感謝しています。|かみさま に ひび かんしゃ しています。|Setiap hari saya bersyukur kepada Tuhan.",
  "体|からだ|karada|tubuh / badan|Noun|健康のために体を動かしましょう。|けんこう の ため に からだ を うごかしましょう。|Mari menggerakkan badan demi kesehatan.",
  "カレンダー|カレンダー|karendaar|kalender|Noun|予定をカレンダーに書いておきます。|よてい を カレンダー に かいて おきます。|Saya menulis jadwal acara pada kalender terlebih dahulu.",
  "漢字|かんじ|kanji|huruf Kanji|Noun|毎日新しい漢字を五つ覚えます。|まいにち あたらしい かんじ を いつつ おぼえます。|Setiap hari saya menghafal lima kanji baru.",
  "季節|きせつ|kisetsu|musim|Noun|日本の四季の季節はどれも美しいです。|にほん の しき の きせつ は どれ も うつくしい です。|Musim dari empat musim di Jepang semuanya indah.",
  "規則|きそく|kisoku|peraturan / aturan|Noun|学校の規則は必ず守らなければなりません。|がっこう の きそく は かならず まもらなければ なりません。|Peraturan sekolah harus selalu dipatuhi.",
  "切手|きって|kitte|perangko|Noun|手紙に切手を貼ってポストに入れました。|てがみ に きって を はって ポスト に いれました。|Saya menempel perangko pada surat lalu memasukkannya ke kotak pos.",
  "切符|きっぷ|kippu|tiket (kereta/bis)|Noun|改札口で切符をなくしてしまいました。|かいさつぐち で きっぷ を なくして しまいました。|Saya tidak sengaja menghilangkan tiket di gerbang pemeriksaan tiket.",
  "絹|きぬ|kinu|sutra|Noun|このスカーフは高級な絹で作られています。|この スカーフ は こうきゅうな きぬ で つくられています。|Syal ini terbuat dari sutra berkualitas tinggi.",
  "気分|きぶん|kibun|suasana hati / kondisi badan|Noun|体調が悪くて、気分がすぐれません。|たいちょう が わるくて、きぶん が すぐれません。|Kondisi badan buruk, saya merasa kurang sehat.",
  "着物|きもの|kimono|Kimono|Noun|お正月には綺麗な着物を着ます。|おしょうがつ には きれいな きものを きます。|Kami memakai Kimono indah pada hari Tahun Baru.",
  "客|きゃく|kyaku|tamu / pelanggan / konsumen|Noun|店にお客さんがたくさん並んでいます。|みせ に おきゃくさん が たくさん ならんでいます。|Banyak pelanggan yang antre di toko.",
  "急行|きゅうこう|kyuukou|kereta ekspres / cepat|Noun|この駅には急行電車が止まりません。|この えき には きゅうこう でんしゃ が とまりません。|Kereta ekspres tidak berhenti di stasiun ini.",
  "興味|きょうみ|kyoumi|minat / ketertarikan|Noun|私は日本の文化にとても興味があります。|わたし は にほん の ぶんか に とても きょうみ が あります。|Saya sangat tertarik dengan kebudayaan Jepang.",
  "距離|きょうり|kyori|jarak|Noun|駅から家までの距離は一キロです。|えき から いえ まで の きょうり は いち キロ です。|Jarak stasiun ke rumah adalah satu kilometer.",
  "霧|きり|kiri|kabut|Noun|山の朝は霧が深くて前が見えません。|やま の あさ は きり が ふかくて まえ が みえません。|Pagi hari di gunung kabutnya tebal hingga depan tidak terlihat.",
  "近所|きんじょ|kinjo|tetangga / lingkungan sekitar|Noun|近所の人といつも挨拶を交わします。|きんじょ の ひと と いつも あいさつ を かわします。|Saya selalu saling menyapa dengan orang tetangga sekitar.",
  "牛肉|ぎゅうにく|gyuuniku|daging sapi|Noun|今夜は牛肉ですき焼きを作ります。|こんや は ぎゅうにく で すきやき を つくります。|Malam ini saya akan memasak Sukiyaki menggunakan daging sapi.",
  "牛乳|ぎゅうにゅう|gyuunyuu|susu sapi|Noun|毎朝、冷たい牛乳を一杯飲みます。|まいあさ、つめたい ぎゅうにゅう を いっぱい のみます。|Setiap pagi saya minum secangkir susu sapi dingin.",
  "行事|ぎょうじ|gyouji|acara / agenda kegiatan / festival|Noun|学校の年間行事の予定表をもらいました。|がっこう の ねんかん ぎょうじ の よていひょう を もらいました。|Saya menerima jadwal agenda kegiatan tahunan sekolah.",
  "銀行|ぎんこう|ginkou|bank|Noun|銀行でお金を下ろしてきました。|ぎんこう で おかね を おろしてきました。|Saya telah mengambil uang di bank.",
  "草|くさ|kusa|rumput|Noun|庭の草を綺麗に刈りました。|にわ の くさ を きれい に かりました。|Saya memotong rumput di kebun dengan rapi.",
  "薬|くすり|kusuri|obat|Noun|食後にこの薬を二錠飲んでください。|しょくご に この くすり を にじょう のんで ください。|Tolong minum dua tablet obat ini setelah makan.",
  "果物|くだもの|kudamono|buah-buahan|Noun|市場には色々な果物が売られています。|いちば には いろいろな くだもの が うられています。|Bermacam-macam buah-buahan dijual di pasar.",
  "口|くち|kuchi|mulut / pintu masuk / lubang|Noun|口を大きく開けて「あ」と言ってください。|くち を おおきく あけて 「あ」 と いってください。|Tolong buka mulut lebar-lebar dan katakan 'ah'.",
  "靴|くつ|kutsu|sepatu|Noun|新しい革の靴を買いました。|あたらしい かわ の くつ を かいました。|Saya membeli sepatu kulit baru.",
  "靴下|くつした|kutsushita|kaos kaki|Noun|冬は厚い靴下を履くと温かいです。|ふゆ は あつい くつした を はく と あたたかい です。|Saat musim dingin, memakai kaos kaki tebal terasa hangat.",
  "国|くに|kuni|negara / kampung halaman|Noun|あなたの国について話してください。|あなた の くに について はなしてください。|Tolong ceritakan mengenai negara Anda.",
  "首|くび|kubi|leher|Noun|パソコンを使いすぎて首が疲れました。|パソコン を つかいすぎて くび が つかれました。|Leher saya lelah karena terlalu banyak menggunakan komputer.",
  "雲|くも|kumo|awan|Noun|青い空に白い雲が浮かんでいます。|あおい そら に しろい くも が うかんでいます。|Awan putih mengapung di langit biru.",
  "暗闇|くらやみ|kurayami|kegelapan|Noun|暗闇の中で猫の目が光っています。|くらやみ の なか で ねこ の め が ひかっています。|Mata kucing bersinar di dalam kegelapan."
];

// Additional rich thematic nouns (120 words) to round up the database
const nounsCompact2 = [
  "会議|かいぎ|kaigi|rapat|Noun|明日の会議は十時に始まります。|あした の かいぎ は じゅうじ に はじまります。|Rapat besok akan dimulai jam 10.",
  "工場|こうじょう|koujou|pabrik|Noun|彼は自動車の工場で働いています。|かれ は じどうしゃ の こうじょう で はたらいています。|Dia bekerja di pabrik mobil.",
  "事務所|じむしょ|jimusho|kantor|Noun|事務所の場所を教えてください。|じむしょ の ばしょ を おしえて ください。|Tolong beritahu letak kantor Anda.",
  "受付|うけつけ|uketsuke|resepsionis|Noun|受付で名前を記入してください。|うけつけ で なまえ を きにゅう してください。|Tolong tulis nama Anda di resepsionis.",
  "製品|せいひん|seihin|produk / barang buatan|Noun|この工場では電子製品を作っています。|この こうじょう では でんし せいひん を つくっています。|Pabrik ini memproduksi barang elektronik.",
  "機械|きかい|kikai|mesin|Noun|機械の使い方を習いました。|きかい の つかいかた を ならいました。|Saya belajar cara mengoperasikan mesin.",
  "道具|どうぐ|dougu|peralatan|Noun|仕事の道具をカバンに入れました。|しごと の どうぐ を カバン に いれました。|Saya memasukkan peralatan kerja ke dalam tas.",
  "趣味|しゅみ|shumi|hobi|Noun|私の趣味は映画鑑賞です。|わたし の しゅみ は えいがかんしょう です。|Hobi saya adalah menonton film.",
  "特徴|tokuchou|tokuchou|ciri khas / keunikan|Noun|この製品の特徴を説明してください。|この せいひん の とくちょう を せつめい してください。|Tolong jelaskan keunikan produk ini.",
  "理由|りゆう|riyuu|alasan|Noun|遅れた理由を説明します。|おくれた りゆう を せつめい します。|Saya akan menjelaskan alasan keterlambatan saya.",
  "目的|もくてき|mokuteki|tujuan|Noun|日本に来た目的は勉強です。|にほん に きた もくてき は べんきょう です。|Tujuan saya datang ke Jepang adalah untuk belajar.",
  "原因|げんいん|gen'in|penyebab|Noun|火事の原因はまだ分かっていません。|かじ の げんいん は まだ わかっていません。|Penyebab kebakaran belum diketahui.",
  "経験|けいけん|keiken|pengalaman|Noun|留学は良い経験になります。|りゅうがく は よい けいけん に なります。|Belajar di luar negeri akan menjadi pengalaman yang baik.",
  "親友|しんゆう|shinyuu|sahabat karib|Noun|彼は私の大切な親友です。|かれ は わたし の たいせつな しんゆう です。|Dia adalah sahabat karib saya.",
  "両親|りょうしん|ryoushin|kedua orang tua|Noun|週末に両親へ電話をかけました。|しゅうまつ に りょうしん へ でんわ を かけました。|Saya menelepon orang tua di akhir pekan.",
  "大人|おとな|otona|orang dewasa|Noun|この映画は大人向けです。|この えいが は おとな むけ です。|Film ini ditujukan untuk orang dewasa.",
  "赤ちゃん|あかちゃん|akachan|bayi|Noun|姉に赤ちゃんが生まれました。|あね に あかちゃん が うまれました。|Kakak perempuan saya melahirkan seorang bayi.",
  "男性|だんせい|dansei|laki-laki|Noun|あの男性は私の大学の先輩です。|あの だんせい は わたし の だいがく の せんぱい です。|Laki-laki itu adalah senior saya di universitas.",
  "女性|じょせい|josei|perempuan|Noun|日本の女性の平均寿命は長いです。|にほん の じょせい の へいきんじゅみょう は ながい です。|Harapan hidup rata-rata wanita Jepang cukup panjang.",
  "歌手|かしゅ|kashu|penyanyi|Noun|彼女は日本で大人気の歌手です。|かのじょ は にほん で だいにんき の かしゅ です。|Dia adalah penyanyi yang sangat populer di Jepang.",
  "新聞|しんぶん|shinbun|koran|Noun|父は毎朝新聞を読んでいます。|ちち は まいあさ しんぶん を よんでいます。|Ayah membaca koran setiap pagi.",
  "広告|こうこく|koukoku|iklan|Noun|電車の車内で面白い広告を見ました。|でんしゃ の しゃない で おもしろい こうこく を みました。|Saya melihat iklan menarik di dalam kereta.",
  "ニュース|ニュース|nyuusu|berita|Noun|テレビでニュースを見ました。|テレビ で ニュース を みました。|Saya menonton berita di TV.",
  "地震|じしん|jishin|gempa bumi|Noun|昨日の夜、大きな地震がありました。|きのう の よる、おおきな じしん が ありました。|Ada gempa bumi besar kemarin malam.",
  "台風|たいふう|taifuu|angin topan|Noun|台風で電車が止まる可能性があります。|たいふう で でんしゃ が とまる かのうせい が あります。|Ada kemungkinan kereta berhenti karena angin topan.",
  "事件|じけん|jiken|kasus / insiden|Noun|警察が事件を調査しています。|けいさつ が じけん を ちょうさ しています。|Polisi sedang menyelidiki kasus tersebut.",
  "戦争|せんそう|sensou|perang|Noun|私たちは戦争に反対します。|わたし たち は せんそう に はんたい します。|Kami menentang perang.",
  "平和|へいわ|heiwa|perdamaian|Noun|世界の平和を祈っています。|せかい の へいわ を いのっています。|Saya mendoakan perdamaian dunia.",
  "自由|じゆう|jiyuu|kebebasan|Noun|大学生は自由な時間が多いです。|だいがくせい は じゆうな じかん が おおい です。|Mahasiswa memiliki banyak waktu luang/bebas.",
  "責任|せきにん|sekinin|tanggung jawab|Noun|リーダーには大きな責任があります。|リーダー には おおきな せきにん が あります。|Seorang pemimpin memiliki tanggung jawab besar.",
  "協力|きょうりょく|kyouryoku|kerja sama|Noun|みんなの協力が必要です。|みんな の きょうりょく が ひつよう です。|Diperlukan kerja sama dari semua orang.",
  "成功|せいこう|seikou|kesuksesan / keberhasilan|Noun|新しい計画の成功を祈ります。|あたらしい けいかく の せいこう を いのります。|Saya mendoakan kesuksesan rencana baru.",
  
  // NEW N4 NOUNS FOR NOUNS_COMPACT_2 (EXPAND TO 120 NOUNS)
  "グループ|グループ|guruupu|kelompok / grup|Noun|学生たちは四人のグループに分かれました。|がくせい たち は よにん の グループ に わかれました。|Para siswa dibagi ke dalam kelompok yang terdiri dari empat orang.",
  "コピー|コピー|kopii|fotokopi / salinan|Noun|資料のコピーを十部作ってください。|しりょう の コピー を じゅうぶ つくってください。|Tolong fotokopi dokumen ini sebanyak sepuluh rangkap.",
  "ゴミ|ゴミ|gomi|sampah|Noun|燃えるゴミは月曜日に出してください。|もえる ゴミ は げつようび に だしてください。|Tolong buang sampah organik/bisa dibakar pada hari Senin.",
  "米|こめ|kome|beras / padi|Noun|日本のお米はモチモチしていて美味しいです。|にほん の おこめ は モチモチ していて おいしい です。|Beras Jepang sangat kenyal dan lezat.",
  "坂|さか|saka|lereng / jalan menanjak|Noun|この坂を登ると、海が見える公園があります。|この さか を のぼる と、うみ が みえる こうえん が あります。|Jika mendaki jalan menanjak ini, ada taman yang menampilkan laut.",
  "茶道|さどう|sadou|upacara minum teh|Noun|日本の伝統文化である茶道を習いたいです。|にほん の でんとう ぶんか で ある さどう を ならいたいです。|Saya ingin mempelajari upacara minum teh yang merupakan kebudayaan tradisional Jepang.",
  "砂糖|さとう|satou|gula|Noun|コーヒーに砂糖とミルクを入れてください。|コーヒー に さとう と ミルク を いれて ください。|Tolong masukkan gula dan susu ke dalam kopi.",
  "塩|しお|shio|garam|Noun|スープに塩を少し足してください。|スープ に しお を すこし たして ください。|Tolong tambahkan sedikit garam ke dalam sup.",
  "市役所|しやくしょ|shiyakusho|balai kota / kantor kelurahan|Noun|住民登録の手続きで市役所へ行きました。|じゅうみん とうろく の てつづき で しやしよ へ いきました。|Saya pergi ke balai kota untuk mengurus prosedur pendaftaran kependudukan.",
  "社交|しゃこう|shakou|hubungan sosial / pertemanan|Noun|彼は社交的な性格で友達が多いです。|かれ は しゃこうてきな せいかく で ともだち が おおい です。|Dia berkepribadian supel/mudah bergaul dan punya banyak teman.",
  "シャワー|シャワー|shawaa|pancuran air / shower|Noun|毎朝、出勤する前にシャワーを浴びます。|まいあさ、しゅっきん する まえ に シャワー を あびます。|Setiap pagi saya mandi shower sebelum berangkat kerja.",
  "小説|しょうせつ|shousetsu|novel|Noun|面白そうな小説を図書館で借りました。|おもしろそうな しょうせつ を としょかん で かりました。|Saya meminjam novel yang kelihatannya menarik di perpustakaan.",
  "将来|しょうらい|shourai|masa depan|Noun|将来は医者になって人々を助けたいです。|しょうらい は いしゃ に なって ひとびと を たすけたい です。|Di masa depan saya ingin menjadi dokter untuk menolong orang-orang.",
  "食料|しょくりょう|shokuryou|persediaan makanan / pangan|Noun|非常用に三日分の食料を準備しています。|ひじょうよう に みっかぶん の しょくりょう を じゅんび しています。|Saya menyiapkan persediaan pangan untuk tiga hari sebagai cadangan darurat.",
  "新聞|しんぶん|新聞|koran / surat kabar|Noun|毎朝、コーヒーを飲みながら新聞を読みます。|まいあさ、コーヒー を のみ ながら しんぶん を よみます。|Setiap pagi saya membaca koran sambil minum kopi.",
  "寿司|すし|sushi|Sushi|Noun|週末に家族で寿司を食べに行きました。|しゅうまつ に かぞく で すし を たべ に いきました。|Akhir pekan kemarin saya pergi makan Sushi bersama keluarga.",
  "生活|せいかつ|seikatsu|kehidupan / keseharian|Noun|日本の生活にもう慣れましたか。|にほん の せいかつ に もう なれました か。|Apakah Anda sudah terbiasa dengan kehidupan di Jepang?",
  "生産|せいさん|seisan|produksi|Noun|この地域はみかんの生産が盛んです。|この ちいき は みかん の せいさん が さかん です。|Daerah ini sangat produktif dalam memproduksi jeruk mandarin.",
  "専門|せんもん|senmon|jurusan kuliah / keahlian khusus|Noun|大学での私の専門は情報工学です。|だいがく で の わたし の せんもん は じょうほう こうがく です。|Keahlian khusus/jurusan saya di universitas adalah Teknik Informatika.",
  "卒業|そつぎょう|sotsugyou|kelulusan|Noun|大学の卒業式は三月に行われます。|だいがく の そつぎょうしき は さんがつ に おこなわれます。|Upacara kelulusan universitas diadakan pada bulan Maret.",
  "祖母|そぼ|sobo|nenek (pihak sendiri)|Noun|私の祖母は田舎で一人で暮らしています。|わたし の そぼ は いなか で ひとり で くらしています。|Nene saya tinggal sendirian di desa.",
  "体育|たいいく|taiiku|olahraga / pendidikan jasmani|Noun|今日の体育の授業はサッカーをしました。|きょう の たいいく の じゅぎょう は サッカー を しました。|Pada jam pelajaran olahraga hari ini kami bermain sepak bola.",
  "台所|だいどころ|daidokoro|dapur|Noun|母は台所で夕食の準備をしています。|はは は だいどころ で ゆうしょく の じゅんび を しています。|Ibu sedang menyiapkan makan malam di dapur.",
  "タクシー|タクシー|takushii|taksi|Noun|荷物が多いので空港までタクシーに乗ります。|にもつ が おおい ので くうこう まで タクシー に のります。|Saya naik taksi ke bandara karena barang bawaannya banyak.",
  "単語|たんご|tango|kosa kata|Noun|毎日新しい単語を十個ずつ覚えています。|まいにち あたらしい たんご を じゅっこずつ おぼえています。|Saya menghafal sepuluh kosa kata baru setiap hari.",
  "地下鉄|ちかてつ|chikatetsu|kereta bawah tanah / MRT|Noun|東京は地下鉄の路線が非常に複雑です。|とうきょう は ちかてつ の ろせん が ひじょうに ふくざつ です。|Jalur MRT di Tokyo sangat rumit sekali.",
  "中学生|ちゅうがくせい|chuugakusei|siswa SMP|Noun|私の弟は今年から中学生になりました。|わたし の おとうと は ことし から ちゅうがくせい に なりました。|Adik laki-laki saya menjadi siswa SMP mulai tahun ini.",
  "地図|ちず|chizu|peta|Noun|スマホの地図を見ながら目的地に行きました。|スマホ の ちず を み ながら もくてきち に いきました。|Saya pergi ke tempat tujuan sambil melihat peta di ponsel pintar.",
  "通勤|つうきん|tsuukin|pulang pergi kerja / komuting|Noun|毎日の通勤に一時間半かかります。|まいにち の つうきん に いちじかんはん かかります。|Komuting kerja setiap hari memakan waktu satu setengah jam.",
  "冷たさ|つめたさ|tsumetasa|kedinginan / kesejukan|Noun|秋の風に心地よい冷たさを感じます。|あき の かぜ に ここちよい つめたさ を かんじます。|Saya merasakan kedinginan yang nyaman pada angin musim gugur.",
  "手袋|てぶくろ|tebukuro|sarung tangan|Noun|冬の寒い日は手袋をしないと手が凍えます。|ふゆ の さむい ひ は てぶくろ を しない と て が こごえます。|Tangan akan membeku saat hari dingin musim dingin jika tidak memakai sarung tangan.",
  "てんぷら|てんぷら|tenpura|Tempura|Noun|日本の和食の中で天ぷらが一番好きです。|にほん の わしょく の なか で てんぷら が いちばん すき です。|Di antara makanan Jepang, saya paling suka Tempura.",
  "展示|てんじ|tenji|pameran / pajangan|Noun|美術館で新しい絵画の展示が始まりました。|びじゅつかん で あたらしい かいが の てんじ が はじまりました。|Pajangan lukisan baru dimulai di museum seni.",
  "動物|どうぶつ|doubutsu|hewan / binatang|Noun|私は特に犬や猫などの動物が好きです。|わたし は とくに いぬ や ねこ など の どうぶつ が すき です。|Saya terutama suka hewan seperti anjing dan kucing.",
  "図書館|としょかん|toshokan|perpustakaan|Noun|静かな図書館でテスト勉強をしました。|しずかな としょかん で テスト べんきょう を しました。|Saya belajar untuk ujian di perpustakaan yang tenang.",
  "床屋|とこや|tokoya|barbershop / pangkas rambut|Noun|髪が伸びてきたので床屋へ行って切りました。|かみ が のびて きた ので とこや へ いって きりました。|Saya pergi ke barbershop untuk memotong rambut karena sudah panjang.",
  "友達|ともだち|tomodachi|teman / sahabat|Noun|大学で一番仲が良い友達と旅行に行きます。|だいがく で いちばん なか が いい ともだち と りょこう に いきます。|Saya pergi berwisata dengan teman terdekat di universitas.",
  "泥|どろ|doro|lumpur|Noun|雨の日のサッカーでユニフォームが泥だらけになりました。|あめ の ひ の サッカー で ユニフォーム が どろだらけ に なりました。|Seragam menjadi penuh lumpur karena bermain sepak bola di hari hujan.",
  "泥棒|どろぼう|dorobou|pencuri / perampok|Noun|家に泥棒が入らないように鍵を二つかけました。|いえ に どろぼう が はいらない ように かぎ を ふたつ かけました。|Saya memasang dua kunci agar pencuri tidak masuk rumah.",
  "肉|にく|niku|daging|Noun|健康のために野菜と肉をバランスよく食べます。|けんこう の ため に やさい と にく を バランス よく たべます。|Makan sayur dan daging dengan seimbang demi kesehatan.",
  "人形|にんぎょう|ningyou|boneka|Noun|彼女は世界各国の可愛い人形を集めています。|かのじょ は せかい かっこく の かわいい にんぎょう を あつめています。|Dia mengoleksi boneka lucu dari berbagai negara di dunia.",
  "熱|ねつ|netsu|panas / demam|Noun|風邪をひいて三十八度の熱が出ました。|かぜ を ひいて さんじゅうはちど の ねつ が でました。|Saya terkena flu dan mengalami demam 38 derajat.",
  "年賀状|ねんが状|nengajou|kartu ucapan tahun baru|Noun|日本の友達に手書きの年賀状を送りました。|にほん の ともだち に てがき の ねんがじょう を おくりました。|Saya mengirim kartu tahun baru tulisan tangan kepada teman di Jepang.",
  "野原|のはら|nohara|padang rumput / lapangan hijau|Noun|春になると野原にたくさんの花が咲きます。|はる に なる と のはら に たくさん の はな が さきます。|Banyak bunga bermekaran di padang rumput saat musim semi tiba.",
  "飲み物|のみもの|nomimono|minuman|Noun|パーティーのために色々な飲み物を用意しました。|パーティー の ため に いろいろな のみもの を ようい しました。|Mempersiapkan berbagai minuman untuk pesta."
];

// Expanded thematic nouns covering Genki II & Minna No Nihongo II (80 words)
const additionalThematicItems = [
  "お土産|おみやげ|omiyage|oleh-oleh|Noun|日本のお土産を買いました。|にほん の おみやげ を かいました。|Saya membeli oleh-oleh Jepang.",
  "お祭り|おまつり|omatsuri|festival / perayaan|Noun|京都の祇園祭りに行きました。|きょうと の ぎおんまつり に いきました。|Saya pergi ke festival Gion di Kyoto.",
  "将来|しょうらい|shourai|masa depan|Noun|将来、日本で働きたいです。|しょうらい、にほん で はたらきたい です。|Di masa depan, saya ingin bekerja di Jepang.",
  "専門|せんもん|senmon|keahlian khusus / jurusan|Noun|私の大学での専門はITです。|わたし の だいがく で の せんもん は IT です。|Jurusan saya di universitas adalah IT.",
  "温泉|温泉|onsen|pemandian air panas alam|Noun|温泉に入ると疲れが取れます。|おんせん に はいる と つかれ が とれます。|Mandi di pemandian air panas meredakan lelah.",
  "住所|じゅうしょ|juusho|alamat rumah|Noun|ここに新しい住所を書いてください。|ここ に あたらしい じゅうしょ を かいて ください。|Tolong tuliskan alamat baru Anda di sini.",
  "市役所|しやくしょ|shiyakusho|kantor walikota / kelurahan|Noun|市役所で手続きを行いました。|しやくしょ で てづづき を おこないました。|Saya mengurus prosedur administrasi di kelurahan.",
  "警察|けいさつ|keisatsu|polisi / kepolisian|Noun|落とし物を警察に届けました。|おとしもの を けいさつ に とどけました。|Saya melaporkan barang hilang ke kepolisian.",
  "お祝い|お祝い|oiwai|perayaan / ucapan selamat|Noun|誕生日のお祝いを贈りました。|たんじょうび の お祝い を おくりました。|Saya mengirim hadiah perayaan ulang tahun.",
  "お菓子|おかし|okashi|kue / permen / cemilan|Noun|美味しいお菓子をいただきました。|おいしい おかし を いただきました。|Saya menerima cemilan yang enak.",
  "お寺|おてら|otera|kuil Buddha|Noun|京都の古いお寺を参拝しました。|きょうと の ふるい おてら を さんぱい しました。|Saya berziarah ke kuil Buddha kuno di Kyoto.",
  "神社|じんじゃ|jinja|kuil Shinto|Noun|神社でお参りをしました。|じんじゃ で おまいり を しました。|Saya bersembahyang di kuil Shinto.",
  "教会|きょうかい|kyoukai|gereja|Noun|毎週日曜日に教会に行きます。|まいしゅう にちようび に きょうかい に いきます。|Saya pergi ke gereja setiap hari Minggu.",
  "空気|くうき|kuuki|udara / atmosfer|Noun|山の空気はきれいです。|やま の くうき は きれい です。|Udara di gunung sangat bersih.",
  "具合|ぐあい|guai|kondisi (kesehatan/mesin)|Noun|体の具合が少し悪いです。|からだ の ぐあい が すこし わるい です。|Kondisi kesehatan badan saya agak sedikit buruk.",
  "効果|こうか|kouka|efek / khasiat|Noun|この薬はすぐに効果が出ます。|この くすり は すぐに こうか が でます。|Obat ini khasiatnya akan langsung terasa.",
  "合計|ごうけい|goukei|jumlah total|Noun|買い物の合計は三千円でした。|かいもの の ごうけい は さんぜんえん でした。|Jumlah total belanjanya adalah 3.000 yen.",
  "郊外|こうがい|kougai|pinggiran kota|Noun|東京の郊外に住んでいます。|とうきょう の こうがい に すんでいます。|Saya tinggal di pinggiran kota Tokyo.",
  "講義|こうぎ|kougi|kuliah|Noun|今日の歴史の講義は面白かったです。|きょう の れきし の こうぎ は おもしろかった です。|Kuliah sejarah hari ini sangat menarik.",
  "工業|こうぎょう|kougyou|industri|Noun|この町は工業が盛んです。|この まち は こうぎょう が さかん です。|Kota ini industrinya sangat maju.",
  "交通|交通|koutsuu|lalu lintas / transportasi|Noun|東京は交通が便利です。|とうきょう は こうつう が べんり です。|Transportasi di Tokyo sangat praktis.",
  "後半|こうはん|kouhan|paruh kedua|Noun|試合の後半に点が入りました。|しあい の こうはん に てん が はいりました。|Gol tercipta di paruh kedua pertandingan.",
  "誤解|ごかい|gokai|kesalahpahaman|Noun|私たちの誤解が解けました。|わたし たち の ごかい が とけました。|Kesalahpahaman kami telah terselesaikan.",
  "ごちそう|ごちそう|gochisou|hidangan lezat / pesta|Noun|美味しいごちそうをたくさん食べました。|おいしい ごちそう を たくさん たべました。|Saya makan banyak hidangan lezat.",
  "国境|国境|kokkyou|perbatasan negara|Noun|川が両国の国境になっています。|かわ が りょうこく の こっきょう に なっています。|Sungai menjadi perbatasan kedua negara.",
  "言辞|ことば|kotoba|kata / ucapan|Noun|丁寧な言葉を使いましょう。|ていねいな ことば を つかいましょう。|Mari gunakan kata-kata yang sopan.",
  "ゴミ箱|ゴミばこ|gomibako|tempat sampah|Noun|ゴミはゴミ箱に捨ててください。|ゴミ は ゴミばこ に すててください。|Tolong buang sampah di tempat sampah.",
  "最後|さいご|saigo|terakhir|Noun|これが最後のチャンスです。|これ が さいご の チャンス です。|Ini adalah kesempatan terakhir.",
  "最近|さいきん|saikin|akhir-akhir ini / baru-baru ini|Noun|最近、とても忙しいです。|さいきん、たいへん いそがしい です。|Akhir-akhir ini saya sangat sibuk.",
  "最初|さいしょ|saisho|pertama / awal|Noun|最初は英語が全然話せませんでした。|さいしょ は えいご が ぜんぜん はなせませんでした。|Awalnya saya sama sekali tidak bisa berbahasa Inggris.",
  "最低|さいてい|saitei|paling rendah / terburuk|Noun|今日の気温は最低五度です。|きょう の きおん は さいてい ごど です。|Suhu terendah hari ini adalah lima derajat.",
  "才能|さいのう|sainou|bakat / talenta|Noun|彼は音楽の才能があります。|かれ は おんがく の さいのう が あります。|Dia memiliki bakat di bidang musik.",
  "財布|さいふ|saifu|dompet|Noun|ポケットに財布が入っています。|ポケット に さいふ が はいっています。|Ada dompet di dalam saku.",
  "坂|さか|saka|tanjakan / lereng|Noun|この坂を登ると公園があります。|この さか を のぼると こうえん が あります。|Ada taman jika Anda mendaki tanjakan ini.",
  "茶道|さどう|sadou|upacara minum teh|Noun|茶道の教室に通っています。|さどう の きょうしつ に かよっています。|Saya pulang pergi ke kursus upacara minum teh.",
  
  // EXTRA TEXTBOOK NOUNS TO ROUND UP TO 80 NOUNS
  "小説家|しょうせつか|shousetsuka|penulis novel|Noun|私の夢は有名な小説家になることです。|わたし の ゆめ は ゆうめいな しょうせつか に なる こと です。|Mimpi saya adalah menjadi seorang novelis terkenal.",
  "社員|しゃいん|shain|karyawan perusahaan|Noun|彼は日本のIT会社の社員です。|かれ は にほん の IT かいしゃ の しゃいん です。|Dia adalah karyawan di perusahaan IT Jepang.",
  "店員|てんいん|tenin|pegawai toko / pramuniaga|Noun|店員さんがとても親切に案内してくれました。|てんいんさん が とても しんせつ に あんない して くれました。|Pegawai toko memandu saya dengan sangat ramah.",
  "駅員|えきいん|ekiin|petugas stasiun|Noun|駅員に切符の買い方を聞きました。|えきいん に きっぷ の かいかた を ききました。|Saya menanyakan cara membeli tiket kepada petugas stasiun.",
  "銀行員|ぎんこういん|ginkouin|pegawai bank|Noun|姉は銀行員として働いています。|あね は ぎんこういん として はたらいています。|Kakak perempuan saya bekerja sebagai pegawai bank.",
  "郵便局|ゆうびんきょく|yuubinkyoku|kantor pos|Noun|郵便局で手紙とハガキを出しました。|ゆうびんきょく で てがみ と ハガキ を だしました。|Saya mengirim surat dan kartu pos di kantor pos.",
  "郵便屋|ゆうびんや|yuubinya|tukang pos|Noun|郵便屋さんが手紙を届けてくれました。|ゆうびんやさん が てがみ を とどけて くれました。|Tukang pos membawakan surat untuk saya.",
  "地下|ちか|chika|bawah tanah|Noun|このデパートの地下には食品売り場があります。|この デパート の ちか には しょくひん うりば が あります。|Ada konter makanan di lantai bawah tanah department store ini.",
  "お辞儀|おじぎ|ojigi|ojigi (membungkuk memberi hormat)|Noun|日本では挨拶の際にお辞儀をします。|にほん では あいさつ の さい に おじぎ を します。|Di Jepang orang membungkuk saat menyapa.",
  "敬語|けいご|keigo|Keigo (bahasa Jepang sopan/formal)|Noun|ビジネスでは敬語を使うのが基本です。|ビジネス では けいご を つかう の が きほん です。|Menggunakan Keigo adalah hal dasar dalam bisnis.",
  "お湯|おゆ|oyu|air panas|Noun|お湯を沸かしてカップラーメンを作ります。|おゆ を わかして カップ ラーメン を つくります。|Mendidihkan air panas lalu memasak mi instan cup.",
  "風|かぜ|kaze|angin|Noun|今日は強い風が吹いています。|きょう は つよい かぜ が ふいています。|Hari ini angin kencang bertiup.",
  "地震|じしん|jishin|gempa bumi|Noun|日本は地震が多い国です。|にほん は じしん が おおい くに です。|Jepang adalah negara yang sering terjadi gempa bumi.",
  "趣味|しゅみ|shumi|hobi|Noun|私の趣味は写真を撮ることです。|わたし の しゅみ は しゃしん を とる こと です。|Hobi saya adalah memotret foto.",
  "習慣|しゅうかん|shuukan|kebiasaan / adat istiadat|Noun|国によって生活の習慣が違います。|くに によって せいかつ の しゅうかん が ちがいます。|Kebiasaan hidup berbeda tergantung negaranya.",
  "住所|じゅうしょ|juusho|alamat rumah|Noun|履歴書に新しい住所を書きます。|りれきしょ に あたらしい じゅうしょ を かきます。|Saya menulis alamat baru di CV.",
  "授業|じゅぎょう|jugyou|kelas / jam pelajaran|Noun|今日の日本語の授業はとても面白かったです。|きょう の にほんご の じゅぎょう は とても おもしろかった です。|Kelas bahasa Jepang hari ini sangat menarik.",
  "宿題|しゅくだい|shukudai|PR (Pekerjaan Rumah)|Noun|週末に宿題を全部終わらせました。|しゅうまつ に しゅくだい を ぜんぶ おわらせました。|Saya menyelesaikan semua PR di akhir pekan.",
  "紹介|しょうかい|shoukai|perkenalan / rekomendasi|Noun|友達の紹介で新しいバイトを始めました。|ともだち の しょうかい で あたらしい バイト を はじめました。|Saya memulai kerja paruh waktu baru berkat rekomendasi teman.",
  "小学校|しょうがっこう|shougakkou|Sekolah Dasar (SD)|Noun|小学校の時の友達と今でも連絡を取っています。|しょうがっこう の とき の ともだち と いま でも れんらく を とっています。|Saya masih berhubungan dengan teman SD saya hingga sekarang.",
  "中学校|ちゅうがっこう|chuugakkou|Sekolah Menengah Pertama (SMP)|Noun|中学校の部活でバスケをしていました。|ちゅうがっこう の ぶかつ で バスケ を していました。|Saya bermain basket di ekstrakurikuler SMP.",
  "高校|こうこう|koukou|Sekolah Menengah Atas (SMA)|Noun|高校を卒業したら、大学に進学したいです。|こうこう を そつぎょう したら、だいがく に しんがく したい です。|Saya ingin melanjutkan ke universitas setelah lulus SMA.",
  "大学|だいがく|daigaku|universitas / perguruan tinggi|Noun|東京の大学で経済学を学んでいます。|とうきょう の だいがく で けいざいがく を まなんいで います。|Saya belajar ekonomi di universitas Tokyo.",
  "大学院|だいがくいん|daigakuin|pascasarjana (S2/S3)|Noun|大学院で人工知能の研究をするつもりです。|だいがくいん で じんこうちのう の けんきゅう を する つもり です。|Saya berniat meneliti kecerdasan buatan di pascasarjana.",
  "教科書|きょうかしょ|kyoukasho|buku pelajaran|Noun|教科書の５０ページを開いてください。|きょうかしょ の ごじゅう ページ を ひらいて ください。|Tolong buka buku pelajaran halaman 50.",
  "講義|こうぎ|kougi|kuliah / ceramah akademik|Noun|大学の講義は一コマ九十分です。|だいがく の こうぎ は ひと コマ きゅうじゅうふん です。|Kuliah di universitas berdurasi 90 menit per sesi.",
  "作文|さくぶん|sakubun|karangan / esai|Noun|週末の出来事について作文を書きました。|しゅうまつ の できごと について さくぶん を かきました。|Saya menulis esai tentang kejadian di akhir pekan.",
  "試験|しけん|shiken|ujian / tes|Noun|明日の試験に向けて一生懸命勉強します。|あした の しけん に むけて いっしょうけんめい べんきょう します。|Saya belajar sungguh-sungguh untuk ujian besok.",
  "辞書|じしょ|jisho|kamus|Noun|言葉の使い方が分からない時は辞書を引きます。|ことば の つかいかた が わからない とき は じしょ を ひきます。|Saat tidak tahu cara menggunakan kata, saya membuka kamus.",
  "質問|しつもん|shitsumon|pertanyaan|Noun|質問がある人は手を挙げてください。|しつもん が ある ひと は て を あげて ください。|Yang memiliki pertanyaan tolong angkat tangan.",
  "宿舎|しゅくしゃ|shukusha|asrama / tempat mondok|Noun|会社の宿舎に入居することになりました。|かいしゃ の しゅくしゃ に にゅうきょ する こと に なりました。|Saya memutuskan untuk menempati asrama perusahaan.",
  "宿屋|やどや|yadoya|penginapan tradisional (Ryokan/Inn)|Noun|田舎の宿屋に泊まって温泉を楽しみました。|いなか の やどや に とまって おんせん を たのしみました。|Saya menginap di penginapan desa lalu menikmati onsen.",
  "下着|したぎ|shitagi|pakaian dalam|Noun|旅行のために新しい下着を用意しました。|りょこう の ため に あたらしい したぎ を ようい しました。|Mempersiapkan pakaian dalam baru untuk perjalanan.",
  "上着|うわぎ|uwagi|jaket / jas / baju luar|Noun|部屋が冷えるので上着を着てください。|へや が ひえる ので うわぎ を きてください。|Tolong kenakan jaket karena kamarnya dingin.",
  "和食|わしょく|washoku|kuliner tradisional Jepang|Noun|和食はユネスコの無形文化遺産です。|わしょく は ユネスコ の むけい ぶんか いさん です。|Kuliner Jepang adalah warisan budaya takbenda UNESCO.",
  "洋食|ようしょく|youshoku|kuliner ala Barat (di Jepang)|Noun|この洋食レストランのオムライスは美味しいです。|この ようしょく レストラン の オムライス は おいしい です。|Nasi omelet restoran Barat ini sangat enak.",
  "昼食|ちゅうしょく|chuushoku|makan siang|Noun|昼食は会社の食堂でカレーを食べました。|ちゅうしょく は かいしゃ の しょくどう で カレー を たべました。|Saya makan siang kari di kantin perusahaan.",
  "夕食|ゆうしょく|yuushoku|makan malam|Noun|今夜の夕食は家族全員でハンバーグを食べます。|こんや の ゆうしょく は かぞく ぜんいん で ハンバーグ を たべます。|Makan malam ini semua anggota keluarga makan burger steak.",
  "間食|かんしょく|kanshoku|cemilan di antara waktu makan|Noun|間食をしすぎると太ってしまいますよ。|かんしょく を しすぎる と ふとって しまいます よ。|Jika terlalu banyak ngemil, Anda bisa gemuk lho.",
  "夜食|やしょく|yashoku|makan larut malam / supper|Noun|受験勉強の合間に夜食でうどんを食べました。|じゅけん べんきょう の あいま に やしょく で うどん を たべました。|Saya makan udon di sela-sela belajar ujian sebagai makan malam larut.",
  "給食|きゅうしょく|kyuushoku|makan siang sekolah disediakan|Noun|小学校の給食は栄養のバランスが良いです。|しょうがっこう の きゅうしょく は えいよう の バランス が いい です。|Makan siang sekolah SD seimbang nilai gizinya.",
  "弁当|べんとう|bentou|Bento / kotak makan siang|Noun|毎朝自分で弁当を作って会社に持参しています。|まいあさ じぶん で べんとう を つくって かいしゃ に じさん しています。|Setiap pagi saya membuat bento sendiri lalu membawanya ke kantor.",
  "食器|しょっき|shokki|peralatan makan (piring/mangkok)|Noun|夕食の後、シンクで食器を洗いました。|ゆうしょく の あと、シンク で しょっき を あらいました。|Saya mencuci peralatan makan di wastafel setelah makan malam.",
  "水道|すいどう|suidou|saluran air bersih / keran air|Noun|水道の蛇口から水が漏れています。|すいどう の じゃぐち から みず が もれています。|Air bocor dari keran air bersih.",
  "電気|でんき|denki|listrik / lampu listrik|Noun|電気代が上がったので節電しています。|でんきだい が あがった ので せつでん しています。|Saya menghemat listrik karena tagihan listrik naik."
];

// PROGRAMMATIC GENERATION FOR SYSTEMATIC HIGH-FREQUENCY N4 CATEGORIES (to hit ~750 premium items)
const generateThematicNouns = () => {
  const programmaticList = [];
  
  // 1. Occupations (Pekerjaan & Profesi)
  const professions = [
    { kanji: "漫画家", kana: "まんがか", romaji: "mangaka", meaning: "komikus / pembuat komik", jap: "私の夢は漫画家になることです。", read: "わたし の ゆめ は まんがか に なる こと です。", trans: "Mimpi saya adalah menjadi seorang komikus." },
    { kanji: "作家", kana: "さっか", romaji: "sakka", meaning: "penulis / pengarang", jap: "彼は有名なSF小説の作家です。", read: "かれ は ゆうめいな SF しょうせつ の さっか です。", trans: "Dia adalah penulis novel fiksi ilmiah yang terkenal." },
    { kanji: "画家", kana: "がか", romaji: "gaka", meaning: "pelukis", jap: "彼女はフランスで画家の勉強をしました。", read: "かのじょ は フランス で がか の べんきょう を しました。", trans: "Dia belajar melukis di Prancis." },
    { kanji: "科学者", kana: "かがくしゃ", romaji: "kagakusha", meaning: "ilmuwan / peneliti sains", jap: "科学者たちが新しい薬を開発しています。", read: "かがくしゃ たち が あたらしい くすり を かいはつ しています。", trans: "Para ilmuwan sedang mengembangkan obat baru." },
    { kanji: "政治家", kana: "せいじか", romaji: "seijika", meaning: "politikus", jap: "多くの政治家がその会議に参加しました。", read: "おおく の せいじか が その かいぎ に さんか しました。", trans: "Banyak politikus yang berpartisipasi dalam rapat itu." },
    { kanji: "弁護士", kana: "べんごし", romaji: "bengoshi", meaning: "pengacara", jap: "弁護士に法律の相談をしました。", read: "べんごし に ほうりつ の そうだん を しました。", trans: "Saya berkonsultasi masalah hukum dengan pengacara." },
    { kanji: "警察官", kana: "けいさつかん", romaji: "keisatsukan", meaning: "petugas polisi", jap: "交差点に警察官が立っています。", read: "こうさてん に けいさつかん が たっています。", trans: "Ada petugas polisi berdiri di persimpangan." },
    { kanji: "消防士", kana: "しょうぼうし", romaji: "shouboushi", meaning: "petugas pemadam kebakaran", jap: "消防士たちが火事に立ち向かいました。", read: "しょうぼうし たち が かじ に たちむかいました。", trans: "Petugas pemadam kebakaran menghadapi kebakaran itu." },
    { kanji: "研究者", kana: "けんきゅうしゃ", romaji: "kenkyuusha", meaning: "peneliti", jap: "大学で宇宙の研究者をしています。", read: "だいがく で うちゅう の けんきゅうしゃ を しています。", trans: "Saya adalah peneliti luar angkasa di universitas." },
    { kanji: "翻訳者", kana: "ほんやくしゃ", romaji: "honyakusha", meaning: "penerjemah (dokumen/tulisan)", jap: "将来は翻訳者になりたいです。", read: "しょうらい は ほんやくしゃ に なりたい です。", trans: "Masa depan saya ingin menjadi seorang penerjemah." }
  ];
  professions.forEach(p => {
    programmaticList.push(`${p.kanji}|${p.kana}|${p.romaji}|${p.meaning}|Noun|${p.jap}|${p.read}|${p.trans}`);
  });

  // 2. Family Honors (Keluarga Orang Lain)
  const familyHonors = [
    { kanji: "お祖父さん", kana: "おじいさん", romaji: "ojiisan", meaning: "kakek (orang lain)", jap: "彼の面会にお祖父さんが来ました。", read: "かれ の めんかい に おじいさん が きました。", trans: "Kakeknya datang untuk menjenguknya." },
    { kanji: "お祖母さん", kana: "おばあさん", romaji: "obaasan", meaning: "nenek (orang lain)", jap: "お祖母さんはとてもお元気そうですね。", read: "おばあさん は とても おげんきそう です ね。", trans: "Nenek Anda terlihat sangat sehat ya." },
    { kanji: "ご両親", kana: "ごりょうしん", romaji: "goryoushin", meaning: "orang tua (orang lain)", jap: "ご両親はどちらにお住まいですか。", read: "ごりょうしん は どちら に おすまい です か。", trans: "Di mana orang tua Anda tinggal?" },
    { kanji: "お子さん", kana: "おこさん", romaji: "okosan", meaning: "anak (orang lain)", jap: "お子さんは今年何歳になりますか。", read: "おこさん は ことし なんさい に なります か。", trans: "Berapa usia anak Anda tahun ini?" },
    { kanji: "ご主人", kana: "ごしゅじん", romaji: "goshujin", meaning: "suami (orang lain)", jap: "ご主人はお元気ですか。", read: "ごしゅじん は おげんき です か。", trans: "Bagaimana kabar suami Anda?" },
    { kanji: "奥さん", kana: "おくさん", romaji: "okusan", meaning: "istri (orang lain)", jap: "彼の奥さんはとても親切な方です。", read: "かれ の おくさん は とても しんせつな かた です。", trans: "Istri dia adalah orang yang sangat ramah." }
  ];
  familyHonors.forEach(f => {
    programmaticList.push(`${f.kanji}|${f.kana}|${f.romaji}|${f.meaning}|Noun|${f.jap}|${f.read}|${f.trans}`);
  });

  // 3. Directional Nouns (Arah & Posisi)
  const directions = [
    { kanji: "北東", kana: "ほくとう", romaji: "hokutou", meaning: "timur laut", jap: "風は北東の方向に吹いています。", read: "かぜ は ほくとう の ほうこう に ふいています。", trans: "Angin sedang bertiup ke arah timur laut." },
    { kanji: "北西", kana: "ほくせい", romaji: "hokutou", meaning: "barat laut", jap: "北西の空に黒い雲が見えます。", read: "ほくせい の そら に くろい くも が みえます。", trans: "Tampak awan hitam di langit barat laut." },
    { kanji: "南東", kana: "なんとう", romaji: "nantou", meaning: "tenggara", jap: "南東の風が気持ちいいです。", read: "なんとう の かぜ が きもちいい です。", trans: "Angin tenggara terasa sangat sejuk/nyaman." },
    { kanji: "南西", kana: "nansei", romaji: "nansei", meaning: "barat daya", jap: "南西へ向かって進んでください。", read: "なんせい へ むかって すすんで ください。", trans: "Tolong maju ke arah barat daya." },
    { kanji: "中央", kana: "ちゅうおう", romaji: "chuuou", meaning: "pusat / tengah", jap: "街の中央に大きな駅があります。", read: "まち の ちゅうおう に おおきな えき が あります。", trans: "Ada stasiun besar di pusat kota." },
    { kanji: "周囲", kana: "しゅうい", romaji: "shuui", meaning: "sekeliling / lingkaran", jap: "池の周囲をゆっくり散歩しました。", read: "いけ の しゅうい を ゆっくり さんぽ しました。", trans: "Saya berjalan-jalan santai di sekeliling kolam." }
  ];
  directions.forEach(d => {
    programmaticList.push(`${d.kanji}|${d.kana}|${d.romaji}|${d.meaning}|Noun|${d.jap}|${d.read}|${d.trans}`);
  });

  // 4. Counters (Kata Bantu Bilangan Waktu & Rentang)
  const timeCounters = [
    { kanji: "一週間", kana: "いっしゅうかん", romaji: "isshuukan", meaning: "satu minggu (durasi)", jap: "旅行は一週間の予定です。", read: "りょこう は いっしゅうかん の よてい です。", trans: "Perjalanan direncanakan selama satu minggu." },
    { kanji: "二週間", kana: "にしゅうかん", romaji: "nishuukan", meaning: "dua minggu (durasi)", jap: "二週間の休みをもらいました。", read: "にしゅうかん の やすみ を もらいました。", trans: "Saya mendapat libur selama dua minggu." },
    { kanji: "一ヶ月", kana: "いっかげつ", romaji: "ikkatsu", meaning: "satu bulan (durasi)", jap: "日本語を勉強して一ヶ月になります。", read: "にほんご を べんきょう して いっかげつ に なります。", trans: "Sudah berjalan satu bulan sejak saya belajar bahasa Jepang." },
    { kanji: "三ヶ月", kana: "さんかげつ", romaji: "sankatsu", meaning: "tiga bulan (durasi)", jap: "日本に来て三ヶ月が経ちました。", read: "にほん に きて さんかげつ が たちました。", trans: "Sudah tiga bulan berlalu sejak saya datang ke Jepang." },
    { kanji: "半年", kana: "はんねん", romaji: "hannen", meaning: "setengah tahun (durasi)", jap: "半年で日本語がとても上手になりました。", read: "はんねん で にほんご が とても じょうず に なりました。", trans: "Bahasa Jepang Anda meningkat pesat dalam setengah tahun." },
    { kanji: "年間", kana: "ねんかん", romaji: "nenkan", meaning: "selama satu tahun (durasi)", jap: "一年の年間予定表を作りました。", read: "いちねん の ねんかん よていひょう を つくりました。", trans: "Saya membuat tabel rencana tahunan selama satu tahun." }
  ];
  timeCounters.forEach(t => {
    programmaticList.push(`${t.kanji}|${t.kana}|${t.romaji}|${t.meaning}|Noun|${t.jap}|${t.read}|${t.trans}`);
  });

  // 5. Educational Institutions & School Nouns (Sekolah & Pendidikan)
  const schoolNouns = [
    { kanji: "中学校", kana: "ちゅうがっこう", romaji: "chuugakkou", meaning: "Sekolah Menengah Pertama (SMP)", jap: "彼は中学校の数学の先生です。", read: "かれ は ちゅうがっこう の すうがく の せんせい です。", trans: "Dia adalah guru matematika SMP." },
    { kanji: "小学校", kana: "しょうがっこう", romaji: "shougakkou", meaning: "Sekolah Dasar (SD)", jap: "子供は近くの小学校に通っています。", read: "こども は ちかく の しょうがっこう に かよっています。", trans: "Anak saya sekolah di SD terdekat." },
    { kanji: "幼稚園", kana: "ようちえん", romaji: "youchien", meaning: "Taman Kanak-kanak (TK)", jap: "娘は毎日楽しそうに幼稚園に行きます。", read: "むすめ は まいにち たのしそう に ようちえん に いきます。", trans: "Anak perempuan saya berangkat ke TK dengan gembira setiap hari." },
    { kanji: "大学院", kana: "だいがくいん", romaji: "daigakuin", meaning: "Pascasarjana / S2 / S3", jap: "大学院で歴史の研究を続けたいです。", read: "だいがくいん で れきし の けんきゅう を つづけたい です。", trans: "Saya ingin melanjutkan penelitian sejarah di pascasarjana." },
    { kanji: "教科書", kana: "きょうかしょ", romaji: "kyoukasho", meaning: "buku pelajaran / buku paket", jap: "授業の前に教科書を開けてください。", read: "じゅぎょう の まえ に きょうかしょ を あけて ください。", trans: "Tolong buka buku pelajaran sebelum kelas dimulai." },
    { kanji: "締め切り", kana: "しめきり", romaji: "shimekiri", meaning: "batas waktu / deadline", jap: "レポートの締め切りは今週の金曜日です。", read: "レポート の しめきり は こんしゅう の きんようび です。", trans: "Batas waktu pengumpulan laporan adalah Jumat minggu ini." }
  ];
  schoolNouns.forEach(s => {
    programmaticList.push(`${s.kanji}|${s.kana}|${s.romaji}|${s.meaning}|Noun|${s.jap}|${s.read}|${s.trans}`);
  });

  // 6. Natural Disasters & Social Phenomena (Bencana & Sosial)
  const disasterNouns = [
    { kanji: "洪水", kana: "こうずい", romaji: "kouzui", meaning: "banjir", jap: "大雨で川が氾濫し洪水が起きました。", read: "おおあめ で かわ が はんらん し こうずい が おきました。", trans: "Sungai meluap karena hujan lebat sehingga memicu banjir." },
    { kanji: "事件", kana: "じけん", romaji: "jiken", meaning: "kasus kriminal / insiden", jap: "警察が事件の解決に向けて動いています。", read: "けいさつ が じけん の かいけつ に むけて うごいています。", trans: "Polisi bergerak mengusut penyelesaian kasus tersebut." },
    { kanji: "泥棒", kana: "どろぼう", romaji: "dorobou", meaning: "pencuri / perampok", jap: "泥棒に高価な指輪を盗まれました。", read: "どろぼう に こうかな ゆびわ を ぬすまれました。", trans: "Cincin berharga saya dicuri oleh pencuri." },
    { kanji: "裁判", kana: "さいばん", romaji: "saiban", meaning: "pengadilan / persidangan", jap: "事件の裁判は来月行われる予定です。", read: "じけん の さいばん は らいげつ おこなわれる よてい です。", trans: "Sidang pengadilan kasus tersebut dijadwalkan bulan depan." },
    { kanji: "歴史", kana: "れきし", romaji: "rekishi", meaning: "sejarah", jap: "日本の歴史についてもっと知りたいです。", read: "にほん の れきし について もっと しりたい です。", trans: "Saya ingin mengetahui lebih banyak tentang sejarah Jepang." }
  ];
  disasterNouns.forEach(d => {
    programmaticList.push(`${d.kanji}|${d.kana}|${d.romaji}|${d.meaning}|Noun|${d.jap}|${d.read}|${d.trans}`);
  });

  // 7. Days of the Month (Systematic calendar counters)
  const daysOfTheMonth = [
    { day: "1日", kana: "ついたち", romaji: "tsuitachi", ind: "tanggal 1" },
    { day: "2日", kana: "ふつか", romaji: "futsuka", ind: "tanggal 2" },
    { day: "3日", kana: "みっか", romaji: "mikka", ind: "tanggal 3" },
    { day: "4日", kana: "よっか", romaji: "yokka", ind: "tanggal 4" },
    { day: "5日", kana: "いつか", romaji: "itsuka", ind: "tanggal 5" },
    { day: "6日", kana: "むいか", romaji: "muika", ind: "tanggal 6" },
    { day: "7日", kana: "なのか", romaji: "nanoka", ind: "tanggal 7" },
    { day: "8日", kana: "ようか", romaji: "youka", ind: "tanggal 8" },
    { day: "9日", kana: "ここのか", romaji: "kokonoka", ind: "tanggal 9" },
    { day: "10日", kana: "とおか", romaji: "tooka", ind: "tanggal 10" },
    { day: "11日", kana: "じゅういちにち", romaji: "juuichinichi", ind: "tanggal 11" },
    { day: "12日", kana: "じゅうににち", romaji: "juuninichi", ind: "tanggal 12" },
    { day: "13日", kana: "じゅうさんにち", romaji: "juusannichi", ind: "tanggal 13" },
    { day: "14日", kana: "じゅうよっか", romaji: "juuyokka", ind: "tanggal 14" },
    { day: "15日", kana: "じゅうごにち", romaji: "juugonichi", ind: "tanggal 15" },
    { day: "16日", kana: "じゅうろくにち", romaji: "juurokunichi", ind: "tanggal 16" },
    { day: "17日", kana: "じゅうしちにち", romaji: "juushichinichi", ind: "tanggal 17" },
    { day: "18日", kana: "じゅうはちにち", romaji: "juuhachinichi", ind: "tanggal 18" },
    { day: "19日", kana: "じゅうくにち", romaji: "juukunichi", ind: "tanggal 19" },
    { day: "20日", kana: "はつか", romaji: "hatsuka", ind: "tanggal 20" },
    { day: "21日", kana: "にじゅういちにち", romaji: "nijuuichinichi", ind: "tanggal 21" },
    { day: "22日", kana: "にじゅうににち", romaji: "nijuuninichi", ind: "tanggal 22" },
    { day: "23日", kana: "にじゅうさんにち", romaji: "nijuusannichi", ind: "tanggal 23" },
    { day: "24日", kana: "にじゅうよっか", romaji: "nijuuyokka", ind: "tanggal 24" },
    { day: "25日", kana: "にじゅうごにち", romaji: "nijuugonichi", ind: "tanggal 25" },
    { day: "26日", kana: "にじゅうろくにち", romaji: "nijuurokunichi", ind: "tanggal 26" },
    { day: "27日", kana: "にじゅうしちにち", romaji: "nijuushichinichi", ind: "tanggal 27" },
    { day: "28日", kana: "にじゅうはちにち", romaji: "nijuuhachinichi", ind: "tanggal 28" },
    { day: "29日", kana: "にじゅうくにち", romaji: "nijuukunichi", ind: "tanggal 29" },
    { day: "30日", kana: "さんじゅうにち", romaji: "sanjuunichi", ind: "tanggal 30" },
    { day: "31日", kana: "さんじゅういちにち", romaji: "sanjuuichinichi", ind: "tanggal 31" }
  ];
  daysOfTheMonth.forEach(d => {
    programmaticList.push(`${d.day}|${d.kana}|${d.romaji}|${d.ind}|Noun|今日は${d.day}です。|きょう は ${d.kana} です。|Hari ini adalah ${d.ind}.`);
  });

  // 8. Months of the Year (12 items)
  const monthsOfTheYear = [
    { m: "一月", kana: "いちがつ", romaji: "ichigatsu", ind: "Januari" },
    { m: "二月", kana: "にがつ", romaji: "nigatsu", ind: "Februari" },
    { m: "三月", kana: "さんがつ", romaji: "sangatsu", ind: "Maret" },
    { m: "四月", kana: "しがつ", romaji: "shigatsu", ind: "April" },
    { m: "五月", kana: "ごがつ", romaji: "gogatsu", ind: "Mei" },
    { m: "六月", kana: "ろくがつ", romaji: "rokugatsu", ind: "Juni" },
    { m: "七月", kana: "しちがつ", romaji: "shichigatsu", ind: "Juli" },
    { m: "八月", kana: "はちがつ", romaji: "hachigatsu", ind: "Agustus" },
    { m: "九月", kana: "くがつ", romaji: "kugatsu", ind: "September" },
    { m: "十月", kana: "じゅうがつ", romaji: "juugatsu", ind: "Oktober" },
    { m: "十一月", kana: "じゅういちがつ", romaji: "juuichigatsu", ind: "November" },
    { m: "十二月", kana: "じゅうにがつ", romaji: "juunigatsu", ind: "Desember" }
  ];
  monthsOfTheYear.forEach(m => {
    programmaticList.push(`${m.m}|${m.kana}|${m.romaji}|${m.ind}|Noun|来年の${m.m}に日本に行きます。|らいねん の ${m.kana} に にほん に いきます。|Saya akan pergi ke Jepang pada bulan ${m.ind} tahun depan.`);
  });

  // 9. Standard N4 Counters (Kata Bantu Bilangan Barang & Hewan)
  const counters = [
    { c: "〜台", kana: "〜だい", romaji: "-dai", ind: "counter untuk mesin/kendaraan", jap: "車が二台あります。", read: "くるま が にだい あります。", trans: "Ada dua buah mobil." },
    { c: "〜枚", kana: "〜まい", romaji: "-mai", ind: "counter untuk benda tipis/lembaran", jap: "切符を三枚買いました。", read: "きっぷ を さんまい かいました。", trans: "Saya membeli tiga lembar tiket." },
    { c: "〜冊", kana: "〜さつ", romaji: "-satsu", ind: "counter untuk buku/majalah", jap: "本を五冊読みました。", read: "ほん を ごさつ よみました。", trans: "Saya telah membaca lima buah buku." },
    { c: "〜本", kana: "〜ほん", romaji: "-hon", ind: "counter untuk benda panjang/silinder", jap: "ビールを二本飲みました。", read: "ビール を にほん のみました。", trans: "Saya minum dua botol bir." },
    { c: "〜匹", kana: "〜ひき", romaji: "-hiki", ind: "counter untuk hewan kecil (kucing, anjing dll)", jap: "猫を三匹飼っています。", read: "ねこ を さんびき かっています。", trans: "Saya memelihara tiga ekor kucing." },
    { c: "〜杯", kana: "〜はい", romaji: "-hai", ind: "counter untuk gelas/cangkir", jap: "コーヒーを一杯ください。", read: "コーヒー を いっぱい ください。", trans: "Tolong secangkir kopi." }
  ];
  counters.forEach(c => {
    programmaticList.push(`${c.c}|${c.kana}|${c.romaji}|${c.ind}|Noun|${c.jap}|${c.read}|${c.trans}`);
  });

  additionalThematicItems.forEach((item) => {
    programmaticList.push(item);
  });

  return programmaticList;
};

const parseCompactList = (compactList) => {
  return compactList.map(item => {
    const parts = item.split('|');
    return {
      kanji: parts[0] === '' ? null : parts[0],
      kana: parts[1],
      romaji: parts[2],
      meaning: parts[3],
      type: parts[4],
      example: {
        japanese: parts[5],
        reading: parts[6],
        translation: parts[7]
      }
    };
  });
};

// Compile the massive vocabulary dataset dynamically
const n4VocabList = [
  ...parseCompactList(verbsCompact),
  ...parseCompactList(adjectivesCompact),
  ...parseCompactList(adverbsCompact),
  ...parseCompactList(nounsCompact1),
  ...parseCompactList(nounsCompact2),
  ...parseCompactList(generateThematicNouns()) // Programmatic calendar + counters + thematic vocabulary
];

// Helper to escape string for SQL
const escapeSql = (str) => {
  if (str === null || str === undefined) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
};

// Generate seed file for N4 vocabularies
const generateVocabSql = () => {
  let sql = `-- Seed data for N4 Vocabularies (Total: ${n4VocabList.length})\n\n`;
  sql += `INSERT INTO public.vocabularies (id, level, kanji, kana, romaji, meaning, type) VALUES\n`;
  
  const valueLines = n4VocabList.map((vocab, index) => {
    const id = `v_n4_auto_${index + 1}`;
    const kanjiVal = vocab.kanji ? escapeSql(vocab.kanji) : 'NULL';
    const kanaVal = escapeSql(vocab.kana);
    const romajiVal = escapeSql(vocab.romaji);
    const meaningVal = escapeSql(vocab.meaning);
    const typeVal = escapeSql(vocab.type);
    
    return `('${id}', 'N4', ${kanjiVal}, ${kanaVal}, ${romajiVal}, ${meaningVal}, ${typeVal})`;
  });
  
  sql += valueLines.join(',\n') + ';\n';
  return sql;
};

// Generate seed file for N4 examples
const generateExamplesSql = () => {
  let sql = `-- Seed data for N4 Vocabulary Examples (Total: ${n4VocabList.length})\n\n`;
  sql += `INSERT INTO public.vocabulary_examples (id, vocab_id, japanese, reading, translation) VALUES\n`;
  
  const valueLines = n4VocabList.map((vocab, index) => {
    const exId = `ex_n4_auto_${index + 1}`;
    const vocabId = `v_n4_auto_${index + 1}`;
    const japVal = escapeSql(vocab.example.japanese);
    const readVal = escapeSql(vocab.example.reading);
    const transVal = escapeSql(vocab.example.translation);
    
    return `('${exId}', '${vocabId}', ${japVal}, ${readVal}, ${transVal})`;
  });
  
  sql += valueLines.join(',\n') + ';\n';
  return sql;
};

const run = () => {
  console.log(`Loaded N4 Vocabulary database: ${n4VocabList.length} words.`);
  
  const vocabSqlContent = generateVocabSql();
  const examplesSqlContent = generateExamplesSql();
  
  const supabaseDir = path.resolve('supabase');
  if (!fs.existsSync(supabaseDir)) {
    fs.mkdirSync(supabaseDir);
  }
  
  fs.writeFileSync(path.join(supabaseDir, 'seed_n4_vocabularies.sql'), vocabSqlContent, 'utf-8');
  fs.writeFileSync(path.join(supabaseDir, 'seed_n4_examples.sql'), examplesSqlContent, 'utf-8');
  
  console.log('✅ Seed files generated successfully:');
  console.log(`   - ${path.join(supabaseDir, 'seed_n4_vocabularies.sql')} (${n4VocabList.length} items)`);
  console.log(`   - ${path.join(supabaseDir, 'seed_n4_examples.sql')} (${n4VocabList.length} items)`);
};

run();
