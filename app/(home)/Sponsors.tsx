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
                src="/assets/sponsors/verialabs.png"
                name="Veria Labs"
            >
		Veria autonomously maps, exploits, and secures your entire attack surface.
            </Sponsor>

            <Sponsor
                href="https://www.paloaltonetworks.com/"
                src="/assets/sponsors/paloaltonetworks.jpg"
                name="Palo Alto Networks"
            >
            </Sponsor>

            <Sponsor
                href="https://zellic.io"
                src="/assets/sponsors/zellic_logos_primary/RGB_zellic-logo-primary-dark.png"
                name="Zellic"
            >
                Zellic is a security research firm. Our targets include compilers, virtual machines, web apps, circuits, proof systems, and more. Before Zellic, we previously founded perfect blue, the #1 CTF team in 2020 and 2021. If you're smart and good at CTFs, we'd love to meet you.
                <br /><br />
                We offer a complete benefits package and direct equity participation. We also offer flexible hours, remote work, and both full-time and part-time roles. Our team enjoys regular fully-funded offsites and a range of other perks.
                <br /><br />
                Ask your friends: you might already know someone who works here.
                <br /><br />
                To learn more, check out our blog: <a href="https://zellic.io/auditooor-grindset" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">zellic.io/auditooor-grindset</a>
                <br /><br />
                Work at Zellic: <a href="mailto:jobs@zellic.io" className="text-theme-bright hover:underline">jobs@zellic.io</a> | <a href="https://zellic.io/careers" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">zellic.io/careers</a> | @gf_256
                <br /><br />
                Meet the founders:
                <br />
                - Luna: @gf_256 on Discord (<a href="https://x.com/gf_256" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">Twitter</a>)
                <br />
                - Jazzy @jazzyzellic on Discord (<a href="https://x.com/ret2jazzy" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">Twitter</a>)
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
