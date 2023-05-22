import React, { lazy, useEffect } from 'react';
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  
  CProgress,
  CRow,
  CCallout,
  CHeader
} from '@coreui/react';
// import React from 'react';
import ReactApexChart from 'react-apexcharts';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router';



const Dashboard = () => {

  const history = useHistory();
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );

let bar = {
  options: {
    chart: {
      id: 'radial-bar-chart'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '13px',
          },
          value: {
            fontSize: '13px',
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '13px',
            fontWeight: 'bold',
            // formatter: function (w) {
            //   return 75;
            // }
          }
        }
      }
    }
  },
  series: [75],
  labels: ['Series 1']

  
};

let chart = {
  options: {
    chart: {
      id: 'radial-bar-chart'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '13px',
          },
          value: {
            fontSize: '13px',
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '13px',
            fontWeight: 'bold',
            // formatter: function (w) {
            //   return 75;
            // }
          }
        }
      }
    }
  },
  series: [35],
  labels: ['Series 1']

  
};

let radial = {
  options: {
    chart: {
      id: 'radial-bar-chart'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '13px',
          },
          value: {
            fontSize: '13px',
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '13px',
            fontWeight: 'bold',
            // formatter: function (w) {
            //   return 75;
            // }
          }
        }
      }
    }
  },
  series: [90],
  labels: ['Series 1']

  
};

 let state = {
  options: {
    chart: {
      id: 'pie-chart'
    },
    labels: ['Male', 'Female'],
  },
  series: [57, 43],
};

 let line = {
  options: {
    chart: {
      id: 'line-chart'
    },
    xaxis: {
      categories: ['2015','2016','2017', '2018', '2019', '2020', '2021', '2022', '2023']
    }
  },
  series: [{
    name: 'Full-Time',
    data: [40, 43, 45, 60, 85, 90, 45, 47, 50 ]
  },
  {
    name: 'Part-Time',
    data: [30, 35, 40, 35, 70, 50, 60, 50, 45 ]
  }
]
 
};

  return (
    <>
    <h1>You need to hire</h1>
    <br></br>
    <br></br>
    <CRow>
      <CCol lg="4">
      
      <CCard style={{backgroundColor:"#ffbfe2"}}>
      <CRow>
        <CCol lg="3"><h3 style={{textAlign:"center",  marginTop:"55px"}}>4</h3></CCol>
        <CCol lg="4"><h4 style={{ marginTop:"50px"}}>Senior Developers</h4><p>(6 cardidates)</p></CCol>
        <CCol lg="5"> 
        <div>
      <ReactApexChart options={bar.options} series={bar.series} type="radialBar" height={160} />
    </div>
    </CCol>
        </CRow>
        </CCard>
      
      </CCol>
      <CCol lg="4">
      <CCard style={{backgroundColor:"#ea9de9"}}>
      <CRow>
        <CCol lg="3"><h3 style={{textAlign:"center",  marginTop:"55px"}}>3</h3></CCol>
        <CCol lg="4"><h4 style={{ marginTop:"50px"}}>Content Designers</h4><p>(2 cardidates)</p></CCol>
        <CCol lg="5"> 
        <div>
      <ReactApexChart options={chart.options} series={chart.series} type="radialBar" height={160} />
    </div>
    </CCol>
        </CRow>
        </CCard>

      </CCol>

      <CCol lg="4">
      <CCard style={{backgroundColor:"#CCCCFF"}}>
      <CRow>
        <CCol lg="3"><h3 style={{textAlign:"center",  marginTop:"55px"}}>1</h3></CCol>
        <CCol lg="4"><h4 style={{ marginTop:"50px"}}>Marketing Managers</h4><p>(2 cardidates)</p></CCol>
        <CCol lg="5"> 
        <div>
      <ReactApexChart options={radial.options} series={radial.series} type="radialBar" height={160} />
    </div>
    </CCol>
        </CRow>
        </CCard>

      </CCol>
     </CRow>
     <br></br>
     <br></br>

     <CRow>
      <CCol lg="8">
      <CCard>
          <CCardHeader><h3>Part-Time Vs Full-Time Employees </h3></CCardHeader>
        <CCardBody>
        <div>
      <ReactApexChart options={line.options} series={line.series} type="line" height={350} />
    </div>
        </CCardBody>
        </CCard>
      </CCol>
      <CCol lg="4">
        <CCard>
          <CCardHeader><h3>Female To Male Ratio</h3></CCardHeader>
        <CCardBody>

        <div>
      <ReactApexChart options={state.options} series={state.series} type="pie" width="340" />
    </div>        

        </CCardBody>
        </CCard>

      </CCol>
     </CRow>

     
    
    </>
  )
}

export default Dashboard
