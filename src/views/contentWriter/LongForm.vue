<template>
  <CRow>
    <CCol col="12" md="8">
      <CCard>
        <CCardHeader>
          <strong>Long From Writer</strong>
          <div class="card-header-actions">
            <a  href="https://coreui.io/vue/docs/components/collapse" class="card-header-action" rel="noreferrer noopener"target="_blank">
            <strong class="text-muted">Documentation</strong>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CButton @click="collapse =!collapse" color="primary">
            Click To Find Source
          </CButton>
          <CCollapse :show="collapse" class="mt-2">
            <CCard body-wrapper> {{ text }} <br>
                   <ol>
                    <li v-for="link in items">{{ link.link }}</li>
                   </ol>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Collapses',
  data() {
    return {
      collapse: true,
      cardCollapse: true,
      innerCollapse: false,
      text:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore VHS.',
      items:[
        { id: 1, link: "https//city-gyde.com" },
        { id: 2, link: "https//mindvillage.me" },
        { id: 3, link: "http://afro-unitd.com/" }
      ]
    }
  }
}
</script>
