export * from "./ProfilePage";

export interface PropsProfile {
  id: number;
  name: string;
  status: string;
  bio: string;
  email: string;
  image: string;
  urlIG: string;
  urlX: string;
  urlGit: string;
  urlLinkedin: string;
}

export const profile: PropsProfile[] = [
  {
    id: 1,
    name: "Chandra Adipraja",
    status: "Coder",
    bio: "Hai, saya Chandra Adipraja, seorang mahasiswa informatika yang sangat tertarik dalam bidang teknologi informasi. Saya memiliki ketertarikan pada dunia teknologi dan ingin belajar tentang dunia teknologi.",
    email: "chandracipicung@gmail",
    image: "images/chandra.png",
    urlIG: "https://www.instagram.com/chndraa99/",
    urlX: "https://x.com/ChandraAdipraj1?s=09",
    urlGit: "https://github.com/ChandraAdipraja",
    urlLinkedin: "https://www.linkedin.com/in/chandra-adipraja-ab4918322",
  },
  {
    id: 2,
    name: "Moch Dzikra Rahayu",
    status: "Data Analyst",
    bio: "Halo, saya adalah seorang mahasiswa yang memiliki ketertarikan tentang dunia teknologi. Meski aset yang dimiliki tidak seberapa namun itu tidak membunuh rasa penasaran dan usaha saya dalam menyelami dunia teknologi",
    email: "dzikrahayu212@gmail.com",
    image: "images/dzikra1.png",
    urlIG:
      "https://www.instagram.com/dzikra_rahayu/profilecard/?igsh=M2k2NWt4ZXlkMnNi",
    urlX: "#",
    urlGit: "https://github.com/DzikKun",
    urlLinkedin:
      "https://www.linkedin.com/in/dzikra-rahayu-547700325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Muhammad Kibar Ramadhan",
    status: "Designer",
    bio: "Pemuda asli Tasik yang sedang menempuh pendidikan di perguruan tinggi negeri, mempunyai aura posisi vibes yang dapat menghidupkan suasana orang lain",
    email: "kibarramadhan89@gmail.com",
    image: "images/kibar.png",
    urlIG:
      "https://www.instagram.com/kibar.ygy/profilecard/?igsh=MWduZHQ1bm94bHQ2cQ==",
    urlX: "https://x.com/ramadhan_xyz?t=2znOshIxtZ0BFGSgzi65tA&s=09",
    urlGit: "https://github.com/Barbar-code",
    urlLinkedin:
      "https://www.linkedin.com/in/kibar-aja-sih-00545333a?trk=contact-info",
  },
  {
    id: 4,
    name: "Ridwan Fauzi Almalik",
    status: "Desain Web",
    bio: "Pengen jadi streamer/Vtuber handal",
    email: "foxy.almalik@gmail.com",
    image: "images/ridwan.png",
    urlIG: "https://www.instagram.com/r1rx__/",
    urlX: "https://x.com/RidhwanFauziA?t=wIzutQvMj6eACJuwxRF_sQ&s=09",
    urlGit: "https://github.com/R1-RX",
    urlLinkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
  },
];
