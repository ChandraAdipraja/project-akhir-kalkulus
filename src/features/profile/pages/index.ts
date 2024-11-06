export * from "./ProfilePage";

export interface PropsProfile{
    id: number,
    name: string,
    status: string,
    bio: string,
    email: string,
    image: string,
    urlIG: string,
    urlX: string,
    urlGit: string,
    urlLinkedin: string
}

export const profile: PropsProfile[] = [
    {
        id: 1,
        name: "Chandra Adipraja",
        status: "Coder",
        bio: "Maharaja baginda sepuh nur agung cahaya dewa raja iblis kegelapan dunia bawah, sang sword style yang kejam tapi tidak dingin ",
        email: "chandracipicung@gmail",
        image: "images/chandra.png",
        urlIG: "https://www.instagram.com/chndraa99/",
        urlX: "https://x.com/ChandraAdipraj1?s=09",
        urlGit: "https://github.com/ChandraAdipraja",
        urlLinkedin: "https://www.linkedin.com/in/chandra-adipraja-ab4918322"
    },
    {
        id: 2,
        name: "Dzikra Adipraja",
        status: "Sigma Male",
        bio: "hadehhh,belum mewing satu bulannn rasanya sudah tidak menjadi pria sigma sejati,cobalah untuk mewing sehari 200 kali",
        email: "hansohee@gmail",
        image: "images/dzikra.png",
        urlIG: "https://www.instagram.com/chndraa99/",
        urlX: "https://x.com/ChandraAdipraj1?s=09",
        urlGit: "https://github.com/ChandraAdipraja",
        urlLinkedin: "https://www.linkedin.com/in/chandra-adipraja-ab4918322"
    },
    {
        id: 3,
        name: "Kibar Adipraja",
        status: "Preman Kota Tasik",
        bio: "hai guys gua disini sebagai preman yang ada ditasik,kalau ada apa apa bilang aja KIBAR ADIPRAJA",
        email: "goyoungjung@gmail",
        image: "images/kibar.png",
        urlIG: "https://www.instagram.com/chndraa99/",
        urlX: "https://x.com/ChandraAdipraj1?s=09",
        urlGit: "https://github.com/ChandraAdipraja",
        urlLinkedin: "https://www.linkedin.com/in/chandra-adipraja-ab4918322"
    },
    {
        id: 4,
        name: "Ridwan Adipraja",
        status: "Bang Es-Teh",
        bio: "Apa lu? mau ge banjirin rumah lu pake es teh nyegerin?cih merepotkan", 
        email: "jungsomin@gmail",
        image: "images/ridwan.png",
        urlIG: "https://www.instagram.com/chndraa99/",
        urlX: "https://x.com/ChandraAdipraj1?s=09",
        urlGit: "https://github.com/ChandraAdipraja",
        urlLinkedin: "https://www.linkedin.com/in/chandra-adipraja-ab4918322"
    },
]