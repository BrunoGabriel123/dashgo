import { Header } from "@/components/Header/Index";
import dynamic from 'next/dynamic'

import { Box, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { ApexOptions } from 'apexcharts';
import { SideBar } from "@/components/Sidebar/Index";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options: ApexOptions = {
    chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        }, 
        foreColor:  theme.colors.gray[500],
      },
      grid: {
          show:false,
      },
      dataLabels: {
          enabled: false,
      },
      tooltip: {
          enabled: false,
      },
      xaxis: {
          type: 'datetime',
          axisBorder: {
              color: theme.colors.gray[600]
          },
          axisTicks: {
              color: theme.colors.gray[600]
          },
          categories: [
              '2022-02-18T00:00:00.000Z',
              '2022-02-19T00:00:00.000Z',
              '2022-02-20T00:00:00.000Z',
              '2022-02-21T00:00:00.000Z',
              '2022-02-22T00:00:00.000Z',
              '2022-02-23T00:00:00.000Z',
              '2022-02-24T00:00:00.000Z',
              
          ],
      },
      fill: {
        opacity:0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
      }
  };

const series = [
    {name: 'series1', data: [21, 120, 10, 28, 61, 18, 109]}
]


export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
                <Header />

                <Flex w="100%" mt="6" maxWidth={1400} mx="auto" px="6">
                    <SideBar />
                    <SimpleGrid flex="1" gap="4" minChildWidth="328px" alignItems="flex-start">
                        <Box
                            p={["6", "8"]}
                            bg="gray.800"
                            borderRadius={8}
                            pb="4">
                            <Text fontSize="lg" mb="4">
                                Incritos da semana
                            </Text>
                            <Chart options={options} series={series} type="area" height={140} />
                        </Box>

                        <Box
                            p={["6", "8"]}
                            bg="gray.800"
                            borderRadius={8}
                            pb="4">
                            <Text fontSize="lg" mb="4">
                                Taxa de abertura
                            </Text>
                            <Chart options={options} series={series} type="area" height={140} />
                        </Box>
                    </SimpleGrid>
                </Flex>

                
        </Flex>
    )
}