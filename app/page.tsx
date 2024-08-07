import { ChatImage } from "@/components/chat-image";
import { Container } from "@/components/container";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { JoinWaitlist } from "@/components/join-waitlist";
import { Pricing } from "@/components/pricing";
import { ScrollUp } from "@/components/scroll-up";

const Page = () => {
  return (
    <>
      <Container>
        <ScrollUp />
        <Hero
          title="Boost Your E-commerce Sales by 30% with Our AI Sales Assistant"
          subTitle="Join our waitlist today to be among the first to access this powerful tool and start maximizing your store's potential"
        />
        <JoinWaitlist />
        <ChatImage />
        <Features />
        <Pricing />

        <p className="mt-20 font-outfit font-light text-center">
          Made with ❤️ by <span className="font-medium">SalesRocket360</span>
        </p>
      </Container>
    </>
  );
};

export default Page;
