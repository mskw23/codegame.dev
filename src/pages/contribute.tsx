import type { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Heading, Text } from "../components/typography";

const Contribute: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main className="h-screen pt-32 container mx-auto px-12">
        <Heading>How to contribute?</Heading>
        <Text>
          I&apos;m baby bicycle rights +1 bitters letterpress 3 wolf moon
          aesthetic try-hard raclette readymade banjo. Single-origin coffee poke
          plaid, green juice affogato mumblecore church-key banjo vice. Blue
          bottle cray tilde, beard put a bird on it try-hard slow-carb roof
          party intelligentsia squid occupy raw denim austin bitters. You
          probably haven&apos;t heard of them affogato single-origin coffee
          distillery, cliche gentrify sriracha blog palo santo vice beard
          drinking vinegar. Green juice williamsburg fingerstache, direct trade
          raclette beard mlkshk fixie chartreuse coloring book vaporware. Fixie
          polaroid pour-over green juice. Twee cold-pressed farm-to-table,
          kitsch selvage mixtape everyday carry williamsburg pabst mumblecore.
        </Text>
        <Text>
          Tote bag chillwave meh austin, pinterest trust fund man bun. Hexagon
          art party single-origin coffee slow-carb roof party, leggings brooklyn
          trust fund shoreditch chillwave. Microdosing gentrify small batch
          flexitarian deep v, 8-bit kogi pour-over cred sartorial. Kogi taiyaki
          letterpress, synth disrupt affogato etsy hella hexagon dreamcatcher
          trust fund pickled flannel banh mi craft beer.
        </Text>
        <Text>
          DIY beard shoreditch lo-fi ramps tofu waistcoat pabst raclette ugh.
          Sustainable cornhole vape chambray raw denim narwhal hashtag tumblr
          vaporware quinoa cardigan. Tonx dreamcatcher literally banjo put a
          bird on it asymmetrical. Yuccie kombucha tacos thundercats butcher.
          Man bun before they sold out edison bulb, hell of salvia dreamcatcher
          blog shaman listicle messenger bag whatever brooklyn.
        </Text>
        <Text>
          8-bit mustache cold-pressed, freegan venmo quinoa health goth kale
          chips butcher small batch asymmetrical prism YOLO. Brunch fixie yr
          lumbersexual tbh hexagon irony unicorn selvage. Sriracha 3 wolf moon
          fashion axe intelligentsia typewriter waistcoat. Gastropub quinoa
          hoodie artisan jean shorts polaroid pickled blue bottle mumblecore.
          Try-hard semiotics beard shabby chic fingerstache aesthetic
          vexillologist. Edison bulb biodiesel pitchfork swag narwhal DSA twee
          neutra actually lyft.
        </Text>
        <Text>
          Vegan tonx VHS, DIY pop-up mustache next level kinfolk blue bottle.
          Fanny pack godard butcher austin. Post-ironic fingerstache bushwick
          lyft vaporware chillwave crucifix tacos pug. Cray pop-up air plant
          food truck man braid four loko raclette jean shorts waistcoat pug
          mustache semiotics green juice cronut.
        </Text>
      </main>
    </Layout>
  );
};

export default Contribute;
