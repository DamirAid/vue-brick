<template>
    <Card>
        <div class="document_wrap">
            <div class="document_left">
                <div class="document_title">{{ document.title }} {{ document.number }}</div>
                <div class="document_status"><span class="status_signal" :class="document.status"></span>{{
                    documentStatus[document.status] }}</div>
                <div class="document_data_wrap">
                    <div class="document_data">{{ document.start_date }} - </div>
                    <div class="document_data">{{ document.end_date }}</div>
                </div>
                <div class="document_actions">
                    <IconButton class="doc_action">
                        <PrintSVG />
                    </IconButton>
                    <IconButton class="doc_action">
                        <EditSVG />

                    </IconButton>
                    <IconButton class="doc_action">
                        <RemoveSVG />
                    </IconButton>
                </div>
            </div>
            <div class="documet_file">
                <a href="#" class="document_link">
                    <PdfSVG v-if="document.file.type === fileType.pdf" />
                    <JpgSVG v-else-if="document.file.type === fileType.jpg" />
                    <DocSVG v-else-if="document.file.type === fileType.doc" />
                </a>
            </div>
        </div>
    </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Card from '@/shared/ui/Card/Card.vue';
import { DOCUMENT_STATUSES, FILE_TYPES, IDocument } from '../types/DocumentSchema';
import IconButton from '@/shared/ui/IconButton/IconButton.vue';
import PrintSVG from '@/assets/printer 2.svg'
import EditSVG from '@/assets/edit 1.svg'
import RemoveSVG from '@/assets/bin1.svg'
import JpgSVG from '@/assets/jpg 1.svg'
import PdfSVG from '@/assets/pdf 1.svg'
import DocSVG from '@/assets/doc 1.svg'

export default defineComponent({
    props: {
        document: {
            type: Object as PropType<IDocument>,
            required: true
        }
    },
    components: {
        Card,
        IconButton,
        PrintSVG,
        EditSVG,
        RemoveSVG,
        JpgSVG,
        PdfSVG,
        DocSVG
    },
    computed: {
        fileType() {
            return FILE_TYPES
        },
        documentStatus() {
            return DOCUMENT_STATUSES
        }
    }
})
</script>

<style  scoped>
.document_title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #0D2839;

}

.document_status {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #0D2839;
}

.document_data {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #86939C;
}

.document_link {
    padding: 30px;
    background: #F2F5F8;
    border-radius: 10px;
    display: block;
}

.document_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.doc_action {
    margin-right: 20px;
    margin-top: 20px;
}
.status_signal{
    width: 9px;
    height: 9px;
    border-radius: 2px;
    display: block;
    margin-right: 5px;
}
.status_signal.resolve {
    background: #9ECB45;
}
.status_signal.reject {
    background: #FE6845;
}
</style>
<style>
.card {
    width: 24%;
    margin-bottom: 20px;
}
</style>