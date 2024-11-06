import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/CardProfile";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TitleSection } from "~/components/ui/TitleSection";
import { profile, PropsProfile } from ".";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

export const ProfilePage = () => {
  return (
    <div>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Profile
      </h1>
      <div className="mt-4 flex flex-col justify-center gap-y-8 px-4 lg:flex-row lg:flex-nowrap lg:gap-x-5">
        <TitleSection>Anggota</TitleSection>
        {profile.map((profile: PropsProfile) => (
          <Card
            key={profile.id}
            className="flex min-h-[300px] flex-col items-center justify-between p-6"
          >
            <CardHeader className="items-center">
              <Avatar className="bg-secondaryBlack">
                <AvatarImage src={profile.image} />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              <CardTitle className="text-center">{profile.name}</CardTitle>
              <CardDescription className="text-center text-sm uppercase text-red-500">
                {profile.status}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex min-h-[100px] items-center justify-center text-center">
              {profile.bio}
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <div className="mt-4 flex gap-4">
                <SiGmail className="text-black-500 text-2xl" />
                <Badge variant={"neutral"}>{profile.email}</Badge>
              </div>
              <div className="mt-4 flex gap-4">
                <Link href={profile.urlIG}>
                  <Button variant={"neutral"}>
                    <IoLogoInstagram />
                  </Button>
                </Link>
                <Link href={profile.urlX}>
                  <Button variant={"neutral"}>
                    <FaXTwitter />
                  </Button>
                </Link>
                <Link href={profile.urlGit}>
                  <Button variant={"neutral"}>
                    <FaGithub />
                  </Button>
                </Link>
                <Link href={profile.urlLinkedin}>
                  <Button variant={"neutral"}>
                    <FaLinkedinIn />
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
