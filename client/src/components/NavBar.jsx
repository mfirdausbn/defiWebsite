import React from "react";

import { Navbar, Button, Dropdown, Avatar, Badge } from "flowbite-react";

function App() {
  return (
    <div className="">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            pie
          </span>
          <span className="text-lg font-semibold">defi</span>
        </Navbar.Brand>
        <div className="flex">
          <Navbar.Toggle />
        </div>
        {/* <Navbar.Collapse> */}
        <Dropdown
          inline={true}
          label={<span className="text-xl">Get started</span>}
        >
          <div className="bg-gray-100 w-80 px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold ">
                  Start my Pie Journey
                </div>
                <div className="text-sm">
                  Easy access to lucrative Decentralized finance services
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">
                  Build my crypto portfolio
                </div>
                <div className="text-sm">
                  Discover the perfect Pie service for you
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">
                  Maximize my crypto wealth
                </div>
                <div className="text-sm">
                  Offering high returns for beginners and experiences investors
                  alike
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">
            <span className="text-xl">
              <div className="flex">
                pieELITE <Badge color="info">NEW</Badge>
              </div>
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
        <Dropdown
          inline={true}
          label={<span className="text-xl">Products</span>}
        >
          <div className="grid grid-cols-2 grid-rows-3 bg-gray-100 px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">YieldVault</div>
                <div className="text-sm">
                  Your gateway to Decentralized Finance
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Earn</div>
                <div className="text-sm">Your one stop investment solution</div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Staking</div>
                <div className="text-sm">
                  Bake master nodes and earn staking rewards in real time
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Liquidity Mining</div>
                <div className="text-sm">
                  Mine popular coin pairs for high rewards
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Freezer</div>
                <div className="text-sm">
                  Get bonus daily cash flow for the next 10 years
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Borrow</div>
                <div className="text-sm">
                  Borrow against your crypto assets at competitive rates to
                  unlock new capital streams
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown inline={true} label={<span className="text-xl">Learn</span>}>
          <div className="bg-gray-100 w-80 px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Learn and Earn</div>
                <div className="text-sm">
                  Learn about various crypto and how they work through fun
                  lessons and quizzes
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Blog</div>
                <div className="text-sm">
                  Making finances fun, easy and fresh
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown
          inline={true}
          label={<span className="text-xl">Community</span>}
        >
          <div className="bg-gray-100 w-80 px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Community</div>
                <div className="text-sm">
                  Discover a thriving community of like-minded people
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Affiliate Program</div>
                <div className="text-sm">
                  Earn commissions by sharing Pie DeFi with your audience
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold"> Referral Program</div>
                <div className="text-sm">
                  Earn more when you refer your friends and family
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">VIP Program</div>
                <div className="text-sm">
                  VIP benefits for the most highly values Pie users
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown
          inline={true}
          label={<span className="text-xl">Support</span>}
        >
          <div className="bg-gray-100 w-80 px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Submit a Request</div>
                <div className="text-sm">
                  Get help from our customer success representatives
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">FAQs</div>
                <div className="text-sm">
                  Get answers to your most frequently asked questions
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown
          inline={true}
          label={<span className="text-xl">Company</span>}
        >
          <div className="grid grid-cols-2 bg-gray-100  px-2 py-4">
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">About Us</div>
                <div className="text-sm">We do crypto. You do you </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Pie Defi Enterprise</div>
                <div className="text-sm">
                  Our B2B arm - Secure gateway to DeFi for institutions
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Pie Defi Ventures</div>
                <div className="text-sm">
                  Our VS arm - Investing in the best tech startups globally{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Birthday Research</div>
                <div className="text-sm">
                  Our R&D arm - Developing best-in-class blockchain innovations{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Media Center</div>
                <div className="text-sm">
                  Hot off the press = official announcements, media features and
                  brand assets{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Transparency</div>
                <div className="text-sm">
                  DeFi and Web3 you can trust. Yield you can verify{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Proof of Reserves</div>
                <div className="text-sm">
                  Get 100% assurance with our Merkle tree Proof of Liabilities{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Security</div>
                <div className="text-sm">
                  Protecting your assets with cutting-edge security{" "}
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <div className="text-lg font-semibold">Careers</div>
                <div className="text-sm">
                  Come join us to empower our customers to take control their
                  financial destiny{" "}
                </div>
              </div>
            </Dropdown.Item>
          </div>
        </Dropdown>
        <div className="flex ml-96">
          <Button
            className="mx-4"
            pill={true}
            outline={true}
            gradientDuoTone="purpleToBlue"
          >
            <span className="text-blue-800">Log in</span>
          </Button>
          <Button pill={true}>Sign Up</Button>
          {/* </Navbar.Collapse> */}
        </div>
      </Navbar>
    </div>
  );
}

export default App;
