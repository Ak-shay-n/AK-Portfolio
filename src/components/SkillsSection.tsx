"use client"

// Updated Image assets from Figma
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/8fb00717-f897-4e42-b2f8-692386f90e31";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/29264410-ce3d-4955-b829-b374e7cc18f8";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/97c41270-dbb4-4748-8c33-8c6f4025521f";
const imgRectangle3 = "https://www.figma.com/api/mcp/asset/e991e6af-84a3-4a67-ab54-c50cf6c3cd97";
const imgRectangle5 = "https://www.figma.com/api/mcp/asset/f66c4920-5347-49aa-9a92-b48fc3160a1d";
const imgRectangle6 = "https://www.figma.com/api/mcp/asset/424a300f-cd37-442e-8d93-2a101b074407";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/33e626a1-910f-462d-afb3-eee62eae7504";
const imgRectangle8 = "https://www.figma.com/api/mcp/asset/b5cac4e8-ae16-4738-ba02-c0404df0e5ab";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/e835a1ac-5519-4057-9833-4c993ac9f798";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/34cce9a6-52ee-4ff9-a0ed-5a72b04c143d";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/f804ff85-cc50-4b68-9e13-fff2e38ad62e";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/c9f8222b-0191-4de3-9e11-009ccdcab61e";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/68425c94-f392-4449-9fb3-55d7907b7fcc";
const imgVector25 = "https://www.figma.com/api/mcp/asset/7944ccbe-e96a-4e58-afb0-17f0fc0ff769";
const imgVector26 = "https://www.figma.com/api/mcp/asset/e4be2423-3fc3-4ab5-93db-1a4c46b43e85";
const imgVector27 = "https://www.figma.com/api/mcp/asset/e1cc9f0f-2d2f-403b-8940-28ff507ca6d4";
const imgVector28 = "https://www.figma.com/api/mcp/asset/709fdee1-0b5c-4426-a2e9-949cd155eb49";
const imgVector29 = "https://www.figma.com/api/mcp/asset/dfb0e28f-0b7b-4df4-8dda-9b245a72b9bb";
const imgVector30 = "https://www.figma.com/api/mcp/asset/bbb9b686-cbdf-4c29-b958-d931d3cb872b";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/5f997c34-c6c4-40c5-b822-d564f18beb50";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/3985c4c7-8456-42b0-864d-879e96b4cde5";
const imgEllipse20 = "https://www.figma.com/api/mcp/asset/b670fe27-c165-4c69-867b-0d218b535788";
const imgGroup1897 = "https://www.figma.com/api/mcp/asset/63dcd3fc-2f1c-4071-b449-4c5b63716441";
const imgEllipse21 = "https://www.figma.com/api/mcp/asset/3938d60c-7672-4757-b30f-916bb7d028dc";
const imgEllipse22 = "https://www.figma.com/api/mcp/asset/2d6ef222-4d07-49d9-8c67-1ca9a1df17e5";
const imgEllipse23 = "https://www.figma.com/api/mcp/asset/ce11d940-d6a7-4c63-b598-b55f4bb112d0";
const imgGroup1907 = "https://www.figma.com/api/mcp/asset/3aa89bec-7880-499f-9404-809cb3fbfafc";
const imgGroup = "https://www.figma.com/api/mcp/asset/c5544dec-39e2-4613-a2e3-596e48b2741b";
const imgVector = "https://www.figma.com/api/mcp/asset/e702346b-b2c6-4499-ae7d-c29e94b7cb40";
const imgVector1 = "https://www.figma.com/api/mcp/asset/0476bd3a-b461-4b27-a6d9-70792ab870b4";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/5cd0b9c9-440c-4961-8db6-c90610fbc7e7";
const imgGroup1900 = "https://www.figma.com/api/mcp/asset/b23916fe-a986-4bfa-82fd-63e128128664";
const imgGroup1901 = "https://www.figma.com/api/mcp/asset/ba4d6682-a5b6-42de-ab7f-82793c0895c0";
const imgVector2 = "https://www.figma.com/api/mcp/asset/412516b6-8ce1-4b57-82cd-3e79126a3ce5";
const imgGroup1905 = "https://www.figma.com/api/mcp/asset/42bbcbd7-f2ed-4681-ab04-730353837f71";
const imgGroup1902 = "https://www.figma.com/api/mcp/asset/5f97fa61-d3e6-4843-9578-5f42da38fa4d";
const imgGroup1903 = "https://www.figma.com/api/mcp/asset/c0a3cd22-88ab-4e42-ae3a-dae62de39351";
const imgGroup1904 = "https://www.figma.com/api/mcp/asset/71da4785-aa3c-44d1-9456-7a1b5938b38d";

export default function SkillsSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden flex items-center justify-center min-h-screen">
      {/* Scaled Container matching Figma dimensions */}
      <div className="relative" style={{ width: '881px', height: '754px', transform: 'scale(0.9)', transformOrigin: 'center' }}>
        
        {/* Title Text */}
        <div className="absolute left-1/2 top-[32.5px] -translate-x-1/2 text-center">
          <div className="relative">
            <p className="text-white text-[24px] font-light leading-[31px] tracking-[0.48px] whitespace-nowrap mb-0">
              I'm currently looking to join a <span className="text-[#a362ff]">cross-functional</span> team
            </p>
            <p className="text-white/70 text-[17px] leading-[31px] tracking-[0.48px]">
              that values improving people's lives through accessible design
            </p>
          </div>
        </div>

        {/* Main Skills Container */}
        <div className="absolute left-0 top-[97px] w-full h-[657px]">
          
          {/* Connecting Lines */}
          <div className="absolute" style={{ left: '261.57px', top: '182.5px', width: '517px', height: '327px', pointerEvents: 'none' }}>
            <div className="absolute" style={{ left: '161.93px', top: '0px', width: '122.427px', height: '277.5px' }}>
              <img alt="" className="w-full h-full" src={imgVector25} />
            </div>
            <div className="absolute" style={{ left: '152.01px', top: '17.5px', width: '70.489px', height: '270px' }}>
              <img alt="" className="w-full h-full" src={imgVector26} />
            </div>
            <div className="absolute" style={{ left: '136.5px', top: '16px', width: '34.5px', height: '291.5px' }}>
              <img alt="" className="w-full h-full" src={imgVector27} />
            </div>
            <div className="absolute" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px' }}>
              <div className="rotate-180 scale-y-[-1] w-full h-full">
                <img alt="" className="w-full h-full" src={imgVector28} />
              </div>
            </div>
            <div className="absolute" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px' }}>
              <div className="rotate-180 scale-y-[-1] w-full h-full">
                <img alt="" className="w-full h-full" src={imgVector29} />
              </div>
            </div>
            <div className="absolute" style={{ left: '414px', top: '195px', width: '21px', height: '313px' }}>
              <div className="rotate-180 scale-y-[-1] w-full h-full">
                <img alt="" className="w-full h-full" src={imgVector30} />
              </div>
            </div>
          </div>

          {/* Bottom Shadow */}
          <div className="absolute" style={{ left: '181px', top: '424px', width: '542px', height: '330px' }}>
            <img alt="" className="w-full h-full" src={imgEllipse6} />
          </div>

          {/* Tech Icons */}
          <div className="absolute" style={{ left: '255px', top: '0px' }}>
            {/* Row 1 */}
            <div className="flex absolute" style={{ left: '0px', top: '0px' }}>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '21px', height: '28px', left: '12px', top: '8px' }} src={imgRectangle1} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '32px', height: '28px', left: '6px', top: '8px' }} src={imgRectangle2} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '32px', height: '31px', left: '6px', top: '7px' }} src={imgRectangle3} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[14px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute mix-blend-lighten" style={{ width: '32px', height: '21px', left: '6px', top: '12px' }} src={imgRectangle4} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[19px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle6} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle7} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '9px' }} src={imgRectangle8} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex absolute" style={{ left: '28px', top: '61px' }}>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle5} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[12px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <div className="absolute overflow-hidden" style={{ width: '33px', height: '15px', left: '5.5px', top: '14.5px' }}>
                  <img alt="" className="absolute mix-blend-lighten" style={{ width: '91.12px', height: '52px', left: '-28.53px', top: '-18px' }} src={imgRectangle9} />
                </div>
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[8px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '26px', left: '9px', top: '9px' }} src={imgRectangle10} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute" style={{ width: '26px', height: '25px', left: '9px', top: '10px' }} src={imgRectangle11} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute mix-blend-lighten" style={{ width: '39px', height: '11px', left: '2.5px', top: '16.5px' }} src={imgRectangle12} />
              </div>
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden ml-[11px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgEllipse7} style={{ aspectRatio: '1/1' }} />
                <img alt="" className="absolute mix-blend-lighten" style={{ width: '37px', height: '9px', left: '3.5px', top: '17.5px' }} src={imgRectangle13} />
              </div>
            </div>
          </div>

          {/* Central Glow & Sphere */}
          <div className="absolute" style={{ left: '0px', top: '182.5px', width: '881px', height: '483px' }}>
            <div className="absolute" style={{ left: '0px', top: '107px', width: '881px', height: '269px' }}>
              <img alt="" className="w-full h-full" src={imgEllipse21} />
            </div>
            <div className="absolute" style={{ left: '63px', top: '107px', width: '764px', height: '269px' }}>
              <img alt="" className="w-full h-full" src={imgEllipse22} />
            </div>
            <div className="absolute" style={{ left: '108px', top: '107px', width: '695px', height: '269px' }}>
              <img alt="" className="w-full h-full" src={imgEllipse23} />
            </div>
            <div className="absolute" style={{ left: '292px', top: '135px', width: '306px', height: '275px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1907} />
            </div>
            <div className="absolute" style={{ left: '350px', top: '198px', width: '180px', height: '180px' }}>
              <img alt="" className="w-full h-full" src={imgEllipse20} />
            </div>
            <div className="absolute" style={{ left: '402.36px', top: '243.82px', width: '76.144px', height: '90px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1897} />
            </div>

            {/* Orbital Icons */}
            <div className="absolute" style={{ left: '1.04%', top: '53.46%', width: '9px', height: '9px' }}>
              <img alt="" className="w-full h-full" src={imgGroup} />
            </div>
            <div className="absolute" style={{ left: '0.66%', top: '52.77%', width: '6px', height: '7px' }}>
              <img alt="" className="w-full h-full" src={imgVector} />
            </div>
            <div className="absolute" style={{ left: '0.8%', top: '54.65%', width: '7px', height: '10px' }}>
              <img alt="" className="w-full h-full" src={imgVector1} />
            </div>
            <div className="absolute" style={{ left: '0.55%', top: '56.64%', width: '5px', height: '9px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1} />
            </div>
            <div className="absolute" style={{ right: '0.61%', top: '55.1%', width: '6px', height: '7px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1900} />
            </div>
            <div className="absolute" style={{ right: '1.04%', top: '52.94%', width: '9px', height: '8px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1901} />
            </div>
            <div className="absolute" style={{ right: '0.71%', top: '54.42%', width: '6px', height: '8px' }}>
              <img alt="" className="w-full h-full" src={imgVector2} />
            </div>
            <div className="absolute" style={{ right: '0.65%', top: '55.98%', width: '6px', height: '9px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1905} />
            </div>
            <div className="absolute" style={{ left: '0.6%', top: '52.3%', width: '5px', height: '7px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1902} />
            </div>
            <div className="absolute" style={{ left: '0.64%', top: '53.14%', width: '6px', height: '7px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1903} />
            </div>
            <div className="absolute" style={{ right: '1.09%', top: '56.19%', width: '10px', height: '9px' }}>
              <img alt="" className="w-full h-full" src={imgGroup1904} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
