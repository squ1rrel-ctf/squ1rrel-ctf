import Sponsor from '@/app/(home)/Sponsor';
import SectionHeader from '@/components/SectionHeader';


export default function Sponsors() {
    return (
        <section className="container flex flex-col gap-2">
            <SectionHeader id="sponsors">
                Sponsors
            </SectionHeader>

            <Sponsor
                href="https://verialabs.com"
                src="/assets/sponsors/veria.jpg"
                name="Veria Labs"
            >
		Veria autonomously maps, exploits, and secures your entire attack surface.
            </Sponsor>


            {/* <Sponsor
                href="https://www.trailofbits.com/"
                src="/assets/sponsors/trail-of-bits-dark-alt.png"
                name="Trail of Bits"
            >
                Since 2012, Trail of Bits has helped secure some of the world's most targeted organizations and products.
                They combine high-end security research with a real-world attacker mentality to reduce risk and fortify code.
                <br />
                <br />
                To learn more about Trail of Bits, check out their website: <a href="https://www.trailofbits.com/" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">https://www.trailofbits.com/</a>
            </Sponsor> */}

        </section>
    )
}
