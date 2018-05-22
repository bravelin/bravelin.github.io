<style scoped>
    table{
        margin: 14px 0;
        border: 1px solid #e0e0e0;
        width: 100%;
        border-collapse:collapse;
    }
    thead td{
        //font-weight: bold;
        background: #f0f0f0;
    }
    td{
        padding: 8px 2px;
        text-align: center;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        vertical-align: middle;
        font-size: 14px;
    }
    tr>td:last-child{
        border-right:none;
    }
    tbody>tr:last-child>td{
        border-bottom: none;
    }
</style>
<template>
  <div class="page article">
    <h2 class="title">候选院校参考信息</h2>
    <div class="content">
        <h3 class="title">历年录取最低分（理工）与人数</h3>
        <table>
            <thead>
                <tr>
                    <td style="width:27.5%">院校</td>
                    <td style="width:14.5%">2016</td>
                    <td style="width:14.5%">2015</td>
                    <td style="width:14.5%">2014</td>
                    <td style="width:14.5%">2013</td>
                    <td style="width:14.5%">2012</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">华东交通大学(高职)</td>
                    <td>413</td>
                    <td>416</td>
                    <td>376</td>
                    <td>352</td>
                    <td>375</td>
                </tr>
                <tr>
                    <td>290</td>
                    <td>290</td>
                    <td>280</td>
                    <td></td>
                    <td>229</td>
                </tr>
                <tr>
                    <td rowspan="2">湖南铁道职业技术学院</td>
                    <td>388</td>
                    <td>363</td>
                    <td>346</td>
                    <td>228</td>
                    <td></td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>31</td>
                    <td>43</td>
                    <td>48</td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">湖南铁路科技职业技术学院</td>
                    <td>392</td>
                    <td>367</td>
                    <td>347</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>67</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">南京铁道职业技术学院</td>
                    <td>392</td>
                    <td>323</td>
                    <td>361</td>
                    <td>306</td>
                    <td>216</td>
                </tr>
                <tr>
                    <td>78</td>
                    <td>55</td>
                    <td>50</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">武汉铁道职业技术学院</td>
                    <td>387</td>
                    <td>363</td>
                    <td>341</td>
                    <td>261</td>
                    <td></td>
                </tr>
                <tr>
                    <td>50</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">柳州铁道职业技术学院</td>
                    <td>376</td>
                    <td>234</td>
                    <td>245</td>
                    <td>264</td>
                    <td>317</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>56</td>
                    <td>10</td>
                    <td>15</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
        <h3 class="title">2017年招生计划（江西）</h3>
        <p>华东交通大学（高职）：385</p>
        <p>湖南铁道职业技术学院：60</p>
        <p>湖南铁路科技职业技术学院：60</p>
        <p>南京铁道职业技术学院：55</p>
        <p>武汉铁道职业技术学院：50</p>
        <p>柳州铁道职业技术学院：21</p>
    </div>
    <footer>2017年06月24日</footer>
  </div>
</template>
