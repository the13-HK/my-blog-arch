import { Blob, File } from "buffer";
import { blob } from "stream/consumers";

export const portfolioArray = [
  {
    alt: "ネモフィラ",
    caption: "立川のネモフィラ",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A4564.webp",
  },
  {
    alt: "ネモフィラ２",
    caption: "ネモフィラズーム",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A4571.webp",
  },
  {
    alt: "白い花",
    caption: "何か可愛らしい白い花",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A4611.webp",
  },
  {
    alt: "長崎県人会",
    caption: "長崎県人会のイベントでとった踊りの写真",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A4652.webp",
  },
  {
    alt: "花火をする君",
    caption: "花火をしている嫁の写真",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A7041.webp",
  },
  {
    alt: "スペイン教会",
    caption: "スペインでとった教会の写真",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240525223220_084A5029.webp",
  },
  {
    alt: "メスキータ",
    caption: "メスキータ内部の写真",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240526173635_084A5140.webp",
  },
  {
    alt: "白い壁の街",
    caption: "スペインの白い壁が特徴的な街でとった嫁",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240527173426_084A5430.webp",
  },
  {
    alt: "サグラダファミリアの扉",
    caption: "サグラダファミリアの受難側の扉",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240529175726_084A5666.webp",
  },
  {
    alt: "サグラダファミリアでとった嫁",
    caption: "サグラダファミリアの生誕側の扉でとった嫁",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240529181218_084A5682.webp",
  },
  {
    alt: "下北のミュージックバー",
    caption: "サークルの後輩の演奏写真",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/20240629201403_084A5951.webp",
  },
  {
    alt: "清澄白河のカフェ",
    caption: "モダンなカフェの店構え",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9059.JPG",
  },
  {
    alt: "清澄庭園",
    caption: "庭園歩く陽気な嫁",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9065.JPG",
  },
  {
    alt: "サギ",
    caption: "サギ虚空を見て何思ふ",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9097.JPG",
  },
  {
    alt: "屋敷",
    caption: "松から聞こえる集いの活気",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9234.JPG",
  },
  {
    alt: "石畳",
    caption: "caution!! 石畳の上を歩くと足が痛い",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9303.JPG",
  },
  {
    alt: "ザクロ",
    caption: "貫く赤い果実",
    src: "https://vafeqjlevfzpsbpqshii.supabase.co/storage/v1/object/public/portfolio-pictures/084A9319.JPG",
  },
];
