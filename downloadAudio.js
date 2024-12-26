// add links below. This script will download the audio from youtube and save it as mp3 in the music folder.
const links = [
  "https://www.youtube.com/watch?v=wjj1gfINizA",
  "https://www.youtube.com/watch?v=oJadkTa6cgg",
  "https://www.youtube.com/watch?v=9WFfiYLa-R4",
  "https://www.youtube.com/watch?v=uFaPfxCPPvo",
  "https://www.youtube.com/watch?v=G9IznvTagO8",
  "https://www.youtube.com/watch?v=81ZwDYRE6uc",
  "https://www.youtube.com/watch?v=QrVl7mgVSg0",
  "https://www.youtube.com/watch?v=OsvcJE_S01Y",
  "https://www.youtube.com/watch?v=EKmNeKBOzZM",
  "https://www.youtube.com/watch?v=sCQDGs7W6mE",
  "https://www.youtube.com/watch?v=2qzcHLyv3N0",
  "https://www.youtube.com/watch?v=BS3HgiHPYcs",
  "https://www.youtube.com/watch?v=EK0jZL0SlXc",
  "https://www.youtube.com/watch?v=VQeW62X8rEA",
  "https://www.youtube.com/watch?v=lXna1a-806Q",
  "https://www.youtube.com/watch?v=E0eM349w4SA",
  "https://www.youtube.com/watch?v=qod03PVTLqk",
  "https://www.youtube.com/watch?v=G7KNmW9a75Y",
  "https://www.youtube.com/watch?v=z7FhK-sYR7g",
  "https://www.youtube.com/watch?v=fkAWyeoiYEk",
  "https://www.youtube.com/watch?v=cKWuGJc_F6s",
  "https://www.youtube.com/watch?v=WcIcVapfqXw",
  "https://www.youtube.com/watch?v=FzwiufSPTMA",
  "https://www.youtube.com/watch?v=NTpbbQUBbuo",
  "https://www.youtube.com/watch?v=UTpYD0yf81o",
  "https://www.youtube.com/watch?v=sTpsY9V0FEg",
  "https://www.youtube.com/watch?v=mqhyXNj1JVA",
  "https://www.youtube.com/watch?v=Y6ljFaKRTrI",
  "https://www.youtube.com/watch?v=D3gmU0GOTXI",
  "https://www.youtube.com/watch?v=ZSp6owIGiko",
  "https://www.youtube.com/watch?v=j-nVqg1kDA4",
  "https://www.youtube.com/watch?v=dkGpXtUxEw0",
  "https://www.youtube.com/watch?v=Wgw6tJ8yz9M",
  "https://www.youtube.com/watch?v=RkfvelOJvhI",
  "https://www.youtube.com/watch?v=3r6bDmdNl_k",
  "https://www.youtube.com/watch?v=XJQy_R9CYR4",
  "https://www.youtube.com/watch?v=uCqmTBhgAus",
  "https://www.youtube.com/watch?v=wfwvGOUvP3w",
  "https://www.youtube.com/watch?v=v_B3qkp4nO4",
  "https://www.youtube.com/watch?v=K3Qzzggn--s",
  "https://www.youtube.com/watch?v=OLrnOiW1gSI",
  "https://www.youtube.com/watch?v=Vs2g3m-VvSc",
  "https://www.youtube.com/watch?v=rz6TpihiDDQ",
  "https://www.youtube.com/watch?v=uQ983htswu8",
  "https://www.youtube.com/watch?v=Pa64VVRO6ZU",
  "https://www.youtube.com/watch?v=ApASbjjLrag",
  "https://www.youtube.com/watch?v=QH9vvwPPBS8",
  "https://www.youtube.com/watch?v=Y8o8MpRcEMI",
  "https://www.youtube.com/watch?v=egSqA6j9csw",
  "https://www.youtube.com/watch?v=OsvcJE_S01Y",
  "https://www.youtube.com/watch?v=sCQDGs7W6mE",
  "https://www.youtube.com/watch?v=RZjIKdUe9k8",
  "https://www.youtube.com/watch?v=EQJxzSZM_mI",
  "https://www.youtube.com/watch?v=QrVl7mgVSg0",
  "https://www.youtube.com/watch?v=3byzgVCdRSw",
  "https://www.youtube.com/watch?v=k1BneeJTDcU",
  "https://www.youtube.com/watch?v=1Rx_p3NW7gQ",
  "https://www.youtube.com/watch?v=ObOqq1knVxs",
  "https://www.youtube.com/watch?v=kpRGNxqv6Wk",
  "https://www.youtube.com/watch?v=xHotXbGZiFY",
  "https://www.youtube.com/watch?v=VHrLPs3_1Fs",
  "https://www.youtube.com/watch?v=ZS0WvzRVByg",
  "https://www.youtube.com/watch?v=H4ifSrE8iSg",
  "https://www.youtube.com/watch?v=6Xlo2abddXU",
  "https://www.youtube.com/watch?v=eFQV0XtLjBU",
  "https://www.youtube.com/watch?v=KqN2_elfe2U",
  "https://www.youtube.com/watch?v=6kyY8BD5_TI",
  "https://www.youtube.com/watch?v=FP808MiJUcM",
  "https://www.youtube.com/watch?v=rhoaPfOSrd0",
  "https://www.youtube.com/watch?v=08xzc6pZ0m8",
  "https://www.youtube.com/watch?v=Vu0nRz_bQ0Y",
  "https://www.youtube.com/watch?v=B9RIHOnGGsg",
  "https://www.youtube.com/watch?v=h4OAXvDRZTY",
  "https://www.youtube.com/watch?v=47dtFZ8CFo8",
  "https://www.youtube.com/watch?v=Yw1tCJ1y34o",
  "https://www.youtube.com/watch?v=X-yIEMduRXk",
  "https://www.youtube.com/watch?v=16YnOUnbE6s",
  "https://www.youtube.com/watch?v=AzhZE2szF2M",
  "https://www.youtube.com/watch?v=tvTRZJ-4EyI",
  "https://www.youtube.com/watch?v=uZs1AHQBz24",
  "https://www.youtube.com/watch?v=sbTfueO9fO8",
  "https://www.youtube.com/watch?v=Nj2U6rhnucI",
  "https://www.youtube.com/watch?v=fWNaR-rxAic",
  "https://www.youtube.com/watch?v=X8DhlfxHhns",
  "https://www.youtube.com/watch?v=R37IfQg0eTQ",
  "https://www.youtube.com/watch?v=n57aQQsQiwc",
  "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
  "https://www.youtube.com/watch?v=JiqDOoghs50",
  "https://www.youtube.com/watch?v=0bfk90rWV9U",
  "https://www.youtube.com/watch?v=eP0TeMzBc7U",
  "https://www.youtube.com/watch?v=1nydxbGhgv8",
  "https://www.youtube.com/watch?v=Nj2U6rhnucI",
  "https://www.youtube.com/watch?v=cIriwVhRPVA",
  "https://www.youtube.com/watch?v=z6A2LHGx8_A",
  "https://www.youtube.com/watch?v=xzonQoON9eo",
  "https://www.youtube.com/watch?v=bNuCNZK-r5A",
  "https://www.youtube.com/watch?v=E7lr7pU9fYA",
  "https://www.youtube.com/watch?v=hKvbaZTAQN0",
  "https://www.youtube.com/watch?v=niG3YMU6jFk",
  "https://www.youtube.com/watch?v=fk4BbF7B29w",
  "https://www.youtube.com/watch?v=DDWKuo3gXMQ",
  "https://www.youtube.com/watch?v=YQHsXMglC9A",
  "https://www.youtube.com/watch?v=rYEDA3JcQqw",
  "https://www.youtube.com/watch?v=08DjMT-qR9g",
  "https://www.youtube.com/watch?v=1nydxbGhgv8",
  "https://www.youtube.com/watch?v=lSD_L-xic9o",
  "https://www.youtube.com/watch?v=NLphEFOyoqM",
  "https://www.youtube.com/watch?v=Yq6qkq_TWAM",
  "https://www.youtube.com/watch?v=K17df81RL9Y",
  "https://www.youtube.com/watch?v=HrBTgIsKCBQ",
  "https://www.youtube.com/watch?v=OiC1rgCPmUQ",
  "https://www.youtube.com/watch?v=VF-r5TtlT9w",
  "https://www.youtube.com/watch?v=hCuMWrfXG4E",
  "https://www.youtube.com/watch?v=cLyUcAUMmMY",
  "https://www.youtube.com/watch?v=iQp1_GfDhwQ",
  "https://www.youtube.com/watch?v=THeLVhU53ow",
  "https://www.youtube.com/watch?v=NTpbbQUBbuo",
  "https://www.youtube.com/watch?v=m-M1AtrxztU",
  "https://www.youtube.com/watch?v=pjTj-_55WZ8",
  "https://www.youtube.com/watch?v=ru0K8uYEZWw",
  "https://www.youtube.com/watch?v=h0v30jKH958",
  "https://www.youtube.com/watch?v=uuZE_IRwLNI",
  "https://www.youtube.com/watch?v=lp-EO5I60KA",
  "https://www.youtube.com/watch?v=aatr_2MstrI",
  "https://www.youtube.com/watch?v=SiAuAJBZuGs",
  "https://www.youtube.com/watch?v=Il-an3K9pjg",
  "https://www.youtube.com/watch?v=SR6iYWJxHqs",
  "https://www.youtube.com/watch?v=IcrbM1l_BoI",
  "https://www.youtube.com/watch?v=bqIxCtEveG8",
  "https://www.youtube.com/watch?v=3O1_3zBUKM8",
  "https://www.youtube.com/watch?v=-rey3m8SWQI",
  "https://www.youtube.com/watch?v=ksdAs4LBRq8",
  "https://www.youtube.com/watch?v=k2qgadSvNyU",
  "https://www.youtube.com/watch?v=TJAfLE39ZZ8",
  "https://www.youtube.com/watch?v=lB8ndX9WIj0",
  "https://www.youtube.com/watch?v=87gWaABqGYs",
  "https://www.youtube.com/watch?v=_c_n0A3BFVE",
  "https://www.youtube.com/watch?v=IU5vKbyc3c8",
  "https://www.youtube.com/watch?v=8qGFAkyfjDU",
  "https://www.youtube.com/watch?v=8Ypnr33sEmg",
  "https://www.youtube.com/watch?v=xQVXm-imzoA",
  "https://www.youtube.com/watch?v=BPBBZyAlu7c",
  "https://www.youtube.com/watch?v=kRAPxo59EbU",
  "https://www.youtube.com/watch?v=CHXD9k19q1Y",
  "https://www.youtube.com/watch?v=oPo4n9tBPsk",
  "https://www.youtube.com/watch?v=xYq4mlNiDTg",
  "https://www.youtube.com/watch?v=dI2eAwHM9uE",
  "https://www.youtube.com/watch?v=meeWulQosl4",
  "https://www.youtube.com/watch?v=ZhskLrsvHIg",
];
const fs = require("fs");
const ytdl = require("ytdl-core");
const youtubedl = require("youtube-dl-exec");
const path = require("path");

async function downloadAudio(url) {
  try {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title
      .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
      .trim();
    const outputPath = `./music/${title}.mp3`;

    if (!fs.existsSync("./music")) {
      fs.mkdirSync("./music");
    }

    console.log("\nStarting download...");

    await youtubedl(url, {
      output: outputPath,
      extractAudio: true,
      audioFormat: "mp3",
      audioQuality: "0",
    });

    console.log("Finished downloading:", outputPath);
  } catch (error) {
    console.error("Download error:", error);
  }
}
(async () => {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    console.log(`Downloading ${i + 1}/${links.length}: ${link}`);

    await downloadAudio(link);
  }
  const folderPath = "./music";

  // since the audio in yt server are saved as webm, we need to convert it to mp3 since webm are considered as video files.
  fs.readdirSync(folderPath).forEach((file) => {
    if (path.extname(file).toLowerCase() === ".webm") {
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(
        folderPath,
        path.basename(file, ".webm") + ".mp3"
      );
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${file} → ${path.basename(newPath)}`);
    }
  });
})();
