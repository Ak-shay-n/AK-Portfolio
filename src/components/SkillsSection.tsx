"use client"

// Fresh image assets from Figma design (Skills section node 16:226)
// Tech icon images
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/eb2a5551-fcce-43b3-b5df-426a062984ce";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/fc9e9a52-62b3-4989-a673-13329711a768";
const imgRectangle3 = "https://www.figma.com/api/mcp/asset/76894ac6-8598-4273-a602-c6a81811971c";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/f1ffdeb8-afd2-44cc-9c4d-a09a8ba42d3a";
const imgRectangle5 = "https://www.figma.com/api/mcp/asset/8de3811b-92bc-455f-a51f-2d064f27c96e";
const imgRectangle6 = "https://www.figma.com/api/mcp/asset/aded5528-4c96-498f-a540-d4db351aad64";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/d720d51f-b03c-4642-9575-ff163298bfee";
const imgRectangle8 = "https://www.figma.com/api/mcp/asset/26929df0-72b7-451e-9a8b-22f4c460818b";
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/a29fd602-2583-4aff-b383-17c3bcd23e34";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/979b2360-b49f-4791-8f8f-a8004cb853ef";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/46a4ac58-c101-4c44-b494-22f0cf88f5d0";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/20b75f9e-a322-4ad8-ad66-fe95ffe10b14";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/86837b04-c7f0-48f2-af67-e82637abedad";

// Connecting lines
const imgVector25 = "https://www.figma.com/api/mcp/asset/44765f6d-12c7-4a92-849e-0de0c57b427f";
const imgVector26 = "https://www.figma.com/api/mcp/asset/3d0a1239-6a63-4250-88f4-68cc94acea78";
const imgVector27 = "https://www.figma.com/api/mcp/asset/c26ea2da-eccd-4826-91b3-6d4315126a84";
const imgVector28 = "https://www.figma.com/api/mcp/asset/ad228d1a-0e17-45d7-8308-aa48042dad7a";
const imgVector29 = "https://www.figma.com/api/mcp/asset/ad5b134b-ac6c-4166-aacd-d1f0638991d8";
const imgVector30 = "https://www.figma.com/api/mcp/asset/3b7930bc-b7df-43b0-9d86-e6f069250ed3";

// Background & glow elements
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/ee93d321-534e-46d1-935b-5849965e217b";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/9d6620a1-1618-4938-967d-3c23a1ee41b3";
const imgEllipse20 = "https://www.figma.com/api/mcp/asset/1ade2e5d-9b29-4534-90b9-26e89c4499b2";
const imgGroup1897 = "https://www.figma.com/api/mcp/asset/d21b0bf1-a589-4735-8417-4f4561786dbe";
const imgEllipse21 = "https://www.figma.com/api/mcp/asset/fd05c011-a030-45b5-81f7-f37a37a22fcc";
const imgEllipse22 = "https://www.figma.com/api/mcp/asset/e2dd34e9-3c92-496d-af8d-d8c9b020f5f1";
const imgEllipse23 = "https://www.figma.com/api/mcp/asset/008421d1-a08d-467b-b592-b1a2b96a67de";
const imgGroup1907 = "https://www.figma.com/api/mcp/asset/b2838fc1-9cfb-4e80-b69d-4d922f6c6f2d";

// Orbital icons
const imgGroup = "https://www.figma.com/api/mcp/asset/42230511-60d8-4a7a-97c3-25e138519939";
const imgVector = "https://www.figma.com/api/mcp/asset/05ad835c-0704-4c37-88a8-ad814a9c6984";
const imgVector1 = "https://www.figma.com/api/mcp/asset/90cb8527-330e-413f-bce5-b4ea8c18c263";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/6d44949f-10fa-4f5f-a062-4767b82abb7a";
const imgGroup1900 = "https://www.figma.com/api/mcp/asset/d456c6b9-40bf-4671-81ac-ebf7e9e2df46";
const imgGroup1901 = "https://www.figma.com/api/mcp/asset/78f5be0e-b35b-4107-91c8-b9b8cd059626";
const imgVector2 = "https://www.figma.com/api/mcp/asset/7f9af51a-2a1a-4b82-a5df-cae645b257a0";
const imgGroup1905 = "https://www.figma.com/api/mcp/asset/89834ff3-e901-4130-9eb5-d954f4d582e2";
const imgGroup1902 = "https://www.figma.com/api/mcp/asset/1ad86278-03b5-4625-a3d1-3e170d6d5867";
const imgGroup1903 = "https://www.figma.com/api/mcp/asset/a672340c-ece1-438a-8ca6-745267fe624e";
const imgGroup1904 = "https://www.figma.com/api/mcp/asset/b013abad-5ffe-4b48-bc85-e4e87afc9f26";

export default function SkillsSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden flex items-center justify-center min-h-screen">
      {/* 881×754 container matching exact Figma frame dimensions */}
      <div className="relative" style={{ width: '881px', height: '754px', transform: 'scale(0.9)', transformOrigin: 'center' }}>

        {/* ==================== TITLE TEXT ==================== */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
          style={{ top: '32.5px', fontFamily: "'Preahvihear', sans-serif" }}
        >
          <p className="text-white text-[24px] font-normal leading-[31px] tracking-[0.48px] mb-0">
            I&apos;m currently looking to join a{' '}
            <span className="text-[#a362ff]">cross-functional</span> team
          </p>
          <p className="text-white/70 text-[17px] font-normal leading-[31px] tracking-[0.48px]">
            that values improving people&apos;s lives through accessible design
          </p>
        </div>

        {/* ==================== TECH ICON CIRCLES — ROW 1 ==================== */}
        {/* Figma positions (all 44×44, section y=97): x = 255, 310, 365, 423, 475, 530, 585 */}

        {/* Circle 1 — Figma logo */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '255px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="Figma" className="absolute" style={{ width: '21px', height: '28px', left: '12px', top: '8px' }} src={imgRectangle1} />
        </div>
        {/* Circle 2 — React */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '310px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="React" className="absolute" style={{ width: '32px', height: '28px', left: '6px', top: '8px' }} src={imgRectangle2} />
        </div>
        {/* Circle 3 — C */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '365px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="C" className="absolute" style={{ width: '32px', height: '31px', left: '6px', top: '7px' }} src={imgRectangle3} />
        </div>
        {/* Circle 4 — Node.js */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '423px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="Node.js" className="absolute mix-blend-lighten" style={{ width: '32px', height: '21px', left: '6px', top: '12px' }} src={imgRectangle4} />
        </div>
        {/* Circle 5 */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '475px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '8px' }} src={imgRectangle8} />
        </div>
        {/* Circle 6 — JS */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '530px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="JavaScript" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle6} />
        </div>
        {/* Circle 7 */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '585px', top: '97px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle7} />
        </div>

        {/* ==================== TECH ICON CIRCLES — ROW 2 ==================== */}
        {/* Figma positions (all 44×44, section y=158): x = 283, 343, 395, 450, 509, 564 */}

        {/* Circle 1 — XD */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '283px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="Adobe XD" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle5} />
        </div>
        {/* Circle 2 — NEXT.js (clipped sprite) */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '343px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <div className="absolute overflow-hidden mix-blend-lighten" style={{ width: '33px', height: '15px', left: '5px', top: '14px' }}>
            <img alt="Next.js" className="absolute" style={{ width: '275.96%', height: '346.67%', left: '-86.47%', top: '-120%' }} src={imgRectangle9} />
          </div>
        </div>
        {/* Circle 3 — Gatsby/G */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '395px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="" className="absolute" style={{ width: '26px', height: '26px', left: '9px', top: '9px' }} src={imgRectangle10} />
        </div>
        {/* Circle 4 — AI */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '450px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="Adobe Illustrator" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle11} />
        </div>
        {/* Circle 5 — Express */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '509px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="Express" className="absolute mix-blend-lighten" style={{ width: '39px', height: '11px', left: '3px', top: '17px' }} src={imgRectangle12} />
        </div>
        {/* Circle 6 — MongoDB */}
        <div className="absolute w-[44px] h-[44px] rounded-full overflow-hidden" style={{ left: '564px', top: '158px' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} />
          <img alt="MongoDB" className="absolute mix-blend-lighten" style={{ width: '37px', height: '9px', left: '5px', top: '17px' }} src={imgRectangle13} />
        </div>

        {/* ==================== CONNECTING LINES ==================== */}
        {/* Each line positioned absolutely from section origin — no sub-container offset errors */}

        {/* Right-side lines (straight down from right icons) */}
        <div className="absolute pointer-events-none" style={{ left: '461.57px', top: '182.5px', width: '122.427px', height: '277.5px' }}>
          <img alt="" className="block w-full h-full" src={imgVector25} />
        </div>
        <div className="absolute pointer-events-none" style={{ left: '452.01px', top: '199.5px', width: '70.489px', height: '270px' }}>
          <img alt="" className="block w-full h-full" src={imgVector26} />
        </div>
        <div className="absolute pointer-events-none" style={{ left: '436.5px', top: '198px', width: '34.5px', height: '291.5px' }}>
          <img alt="" className="block w-full h-full" src={imgVector27} />
        </div>

        {/* Left-side lines (flipped, going down from left icons) */}
        <div className="absolute pointer-events-none" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px' }}>
          <div className="rotate-180 -scale-y-100 w-full h-full">
            <img alt="" className="block w-full h-full" src={imgVector28} />
          </div>
        </div>
        <div className="absolute pointer-events-none" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px' }}>
          <div className="rotate-180 -scale-y-100 w-full h-full">
            <img alt="" className="block w-full h-full" src={imgVector29} />
          </div>
        </div>
        <div className="absolute pointer-events-none" style={{ left: '414px', top: '195px', width: '21px', height: '313px' }}>
          <div className="rotate-180 -scale-y-100 w-full h-full">
            <img alt="" className="block w-full h-full" src={imgVector30} />
          </div>
        </div>

        {/* ==================== SHADOW ELLIPSE ==================== */}
        <div className="absolute pointer-events-none" style={{ left: '181px', top: '424px', width: '542px', height: '330px' }}>
          <img alt="" className="w-full h-full" src={imgEllipse6} />
        </div>

        {/* ==================== CENTRAL GLOW & SPHERE ==================== */}

        {/* Outer orbital ring */}
        <div className="absolute pointer-events-none" style={{ left: '0px', top: '457px', width: '881px', height: '269px' }}>
          <img alt="" className="w-full h-full" src={imgEllipse21} />
        </div>
        {/* Middle orbital ring */}
        <div className="absolute pointer-events-none" style={{ left: '63px', top: '457px', width: '764px', height: '269px' }}>
          <img alt="" className="w-full h-full" src={imgEllipse22} />
        </div>
        {/* Inner orbital ring */}
        <div className="absolute pointer-events-none" style={{ left: '108px', top: '457px', width: '695px', height: '269px' }}>
          <img alt="" className="w-full h-full" src={imgEllipse23} />
        </div>
        {/* Sphere glow halo */}
        <div className="absolute pointer-events-none" style={{ left: '292px', top: '385px', width: '306px', height: '275px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1907} />
        </div>
        {/* Sphere body */}
        <div className="absolute" style={{ left: '350px', top: '448px', width: '180px', height: '180px' }}>
          <img alt="" className="w-full h-full" src={imgEllipse20} />
        </div>
        {/* Logo inside sphere */}
        <div className="absolute" style={{ left: '402.36px', top: '493.82px', width: '76.144px', height: '90px' }}>
          <div className="absolute" style={{ inset: '-14.44% -18.39% -16.67% -18.39%' }}>
            <img alt="" className="block w-full h-full" src={imgGroup1897} />
          </div>
        </div>

        {/* ==================== ORBITAL ICONS ==================== */}
        {/* Small decorative icons positioned along the orbital rings */}
        {/* Computed from Figma inset values against 1980×4400 page, then normalized to section origin (598,1817) */}

        {/* --- LEFT SIDE --- */}
        {/* imgGroup1902 — AI small icon */}
        <div className="absolute" style={{ left: '187px', top: '484px', width: '12px', height: '14px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1902} />
        </div>
        {/* imgGroup1903 — LinkedIn */}
        <div className="absolute" style={{ left: '82px', top: '521px', width: '13px', height: '15px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1903} />
        </div>
        {/* imgVector2 — code brackets */}
        <div className="absolute" style={{ left: '120px', top: '578px', width: '14px', height: '17px' }}>
          <img alt="" className="w-full h-full" src={imgVector2} />
        </div>
        {/* imgGroup1905 — HTML5 */}
        <div className="absolute" style={{ left: '28px', top: '646px', width: '13px', height: '20px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1905} />
        </div>
        {/* imgGroup1904 — Twitter/Y */}
        <div className="absolute" style={{ left: '128px', top: '655px', width: '21px', height: '19px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1904} />
        </div>

        {/* --- RIGHT SIDE --- */}
        {/* imgVector — JS file */}
        <div className="absolute" style={{ left: '771px', top: '505px', width: '13px', height: '15px' }}>
          <img alt="" className="w-full h-full" src={imgVector} />
        </div>
        {/* imgGroup1901 — code brackets */}
        <div className="absolute" style={{ left: '709px', top: '512px', width: '20px', height: '12px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1901} />
        </div>
        {/* imgGroup — React atom */}
        <div className="absolute" style={{ left: '833px', top: '535px', width: '20px', height: '21px' }}>
          <img alt="" className="w-full h-full" src={imgGroup} />
        </div>
        {/* imgVector1 — settings/gear */}
        <div className="absolute" style={{ left: '851px', top: '560px', width: '16px', height: '22px' }}>
          <img alt="" className="w-full h-full" src={imgVector1} />
        </div>
        {/* imgGroup1900 — XD */}
        <div className="absolute" style={{ left: '826px', top: '607px', width: '14px', height: '16px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1900} />
        </div>
        {/* imgGroup1 — plug icon */}
        <div className="absolute" style={{ left: '766px', top: '642px', width: '11px', height: '19px' }}>
          <img alt="" className="w-full h-full" src={imgGroup1} />
        </div>

      </div>
    </section>
  );
}
