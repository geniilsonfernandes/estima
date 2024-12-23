import { Flex, Title, useMantineTheme } from '@mantine/core';

type LogoProps = {
  color?: 'estimou' | 'white' | 'black';
  withText?: boolean;
};

export const Logo = ({ color, withText = false }: LogoProps) => {
  const theme = useMantineTheme();
  return (
    <Flex align="center" gap={4}>
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 1.46462V16.7476H27V22.6061C27 22.9946 26.842 23.3671 26.5607 23.6418C26.2794 23.9164 25.8978 24.0708 25.5 24.0708C25.1022 24.0708 24.7206 23.9164 24.4393 23.6418C24.158 23.3671 24 22.9946 24 22.6061V19.6769H0V22.6061C0 23.7715 0.474106 24.8891 1.31802 25.7131C2.16193 26.5371 3.30653 27 4.5 27H25.5C26.6935 27 27.8381 26.5371 28.682 25.7131C29.5259 24.8891 30 23.7715 30 22.6061V14.7736H7.80746C7.67081 14.7736 7.5528 14.7241 7.45342 14.6251C7.35404 14.5261 7.30435 14.4086 7.30435 14.2725V2.28408C7.30435 2.14799 7.35404 2.03046 7.45342 1.93148C7.5528 1.83251 7.67081 1.78302 7.80746 1.78302H30V1.46462C30 1.07618 29.842 0.703648 29.5607 0.428978C29.2794 0.154308 28.8978 0 28.5 0H6C5.60218 0 5.22064 0.154308 4.93934 0.428978C4.65803 0.703648 4.5 1.07618 4.5 1.46462Z"
          fill={color ?? theme.colors.estimou[5]}
        />
        <path d="M30 5.40182H17.7391V6.57097H30V5.40182Z" fill={color ?? theme.colors.estimou[5]} />
        <path d="M30 9.98563H17.7391V11.1548H30V9.98563Z" fill={color ?? theme.colors.estimou[5]} />
      </svg>
      {withText && (
        <Title order={2} c={color ?? theme.colors.estimou[5]} ml="sm" fz={16} fw={400}>
          Estimou
        </Title>
      )}
    </Flex>
  );
};
