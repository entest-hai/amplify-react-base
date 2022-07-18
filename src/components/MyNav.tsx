import {
  Button,
  Link,
  Flex,
  VisuallyHidden,
} from "@aws-amplify/ui-react";
import { MdClose, MdMenu } from "react-icons/md";
import React from "react";

const Logo = () => {
  return (
    <svg
      className="docs-logo-svg"
      viewBox="0 0 644 125"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M108.727 98.4091H128.091V56.5C128.091 48.7727 133 43.6364 139.455 43.6364C145.818 43.6364 150.091 48 150.091 54.8636V98.4091H168.864V55.7727C168.864 48.5455 173 43.6364 180.045 43.6364C186.227 43.6364 190.864 47.5 190.864 55.2727V98.4091H210.182V51.4546C210.182 36.3182 201.182 27.6818 188.182 27.6818C177.955 27.6818 170 32.9091 167.136 40.9091H166.409C164.182 32.8182 157.045 27.6818 147.455 27.6818C138.045 27.6818 130.909 32.6818 128 40.9091H127.182V28.5909H108.727V98.4091Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M225.477 124.591H244.841V87.2273H245.432C248.114 93.0455 253.977 99.5455 265.25 99.5455C281.159 99.5455 293.568 86.9545 293.568 63.5909C293.568 39.5909 280.614 27.6818 265.295 27.6818C253.614 27.6818 248.023 34.6364 245.432 40.3182H244.568V28.5909H225.477V124.591ZM244.432 63.5C244.432 51.0455 249.705 43.0909 259.114 43.0909C268.705 43.0909 273.795 51.4091 273.795 63.5C273.795 75.6818 268.614 84.1364 259.114 84.1364C249.795 84.1364 244.432 75.9546 244.432 63.5Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M325.841 5.31818H306.477V98.4091H325.841V5.31818Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M341.352 98.4091H360.716V28.5909H341.352V98.4091ZM351.08 19.5909C356.852 19.5909 361.58 15.1818 361.58 9.77273C361.58 4.4091 356.852 0 351.08 0C345.352 0 340.625 4.4091 340.625 9.77273C340.625 15.1818 345.352 19.5909 351.08 19.5909Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M413.773 28.5909H399.909V23.9091C399.909 19.1818 401.818 16.4091 407.5 16.4091C409.818 16.4091 412.182 16.9091 413.727 17.4091L417.136 2.86364C414.727 2.13637 409.409 0.954544 403.455 0.954544C390.318 0.954544 380.545 8.36364 380.545 23.5455V28.5909H370.682V43.1364H380.545V98.4091H399.909V43.1364H413.773V28.5909Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M437.557 124.591C451.966 124.591 459.602 117.227 463.557 105.955L490.693 28.6818L470.193 28.5909L455.602 79.8636H454.875L440.421 28.5909H420.057L445.102 100.409L443.966 103.364C441.42 109.909 436.557 110.227 429.739 108.136L425.375 122.591C428.148 123.773 432.648 124.591 437.557 124.591Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M588.091 5.31818V64.0909C588.091 74.7273 580.636 82.4091 569.182 82.4091C557.773 82.4091 550.273 74.7273 550.273 64.0909V5.31818H530.591V65.7727C530.591 86.1364 545.955 99.7273 569.182 99.7273C592.318 99.7273 607.773 86.1364 607.773 65.7727V5.31818H588.091Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M643.648 5.31818H623.966V98.4091H643.648V5.31818Z"
        fill="var(--amplify-colors-font-primary)"
      />
      <path
        d="M27.4194 82.4091H62.9094L72 98.4091H71.7439H0L25.2809 54.6012L35.8752 36.2564L44.971 52.0175L27.4194 82.4091ZM40.6554 27.9603L49.3888 12.8276L98.8145 98.4088H81.3109L40.6554 27.9603ZM54.2496 4.40906H71.7299L126 98.4091H108.498L54.2496 4.40906Z"
        fill="var(--amplify-colors-brand-primary-60)"
      />
    </svg>
  );
};

interface MenuButtonProps {
  expanded: boolean;
  setExpanded: any;
}

const MenuButton = ({ expanded, setExpanded }: MenuButtonProps) => {
  return (
    <Button
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <VisuallyHidden>
        {expanded ? "Close menu" : "Open menu"}
      </VisuallyHidden>
      {expanded ? <MdClose></MdClose> : <MdMenu></MdMenu>}
    </Button>
  );
};

interface LogoLinkProps {
  platform: string;
  onClick?: () => void;
}

const LogoLink = ({ platform, onClick }: LogoLinkProps) => {
  return (
    <Link href={"#"}>
      <a onClick={onClick} className={"docs-logo-link"}>
        <VisuallyHidden>Amplify UI Home</VisuallyHidden>
        <Logo />
      </a>
    </Link>
  );
};

const MyNav = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Flex as={"header"} className={"docs-header"}>
      <MenuButton
        expanded={expanded}
        setExpanded={setExpanded}
      ></MenuButton>
      <LogoLink platform={"react"}></LogoLink>
      <Link>
        <a className="docs-logo-link" href="#">
          <VisuallyHidden>Amplify UI Home</VisuallyHidden>
          <Logo></Logo>
          Hello Hai Tran Minh
        </a>
      </Link>
    </Flex>
  );
};

export default MyNav;
