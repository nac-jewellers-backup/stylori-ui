PGDMP         &    
            x            new_production    11.5    12.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17476    new_production    DATABASE     �   CREATE DATABASE new_production WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE new_production;
                MacV3khhqLb3qyb5    false            ;           1259    18496    master_countries    TABLE     �  CREATE TABLE public.master_countries (
    id integer NOT NULL,
    iso character varying(255),
    name character varying(255),
    nicename character varying(255),
    iso3 character varying(255),
    numcode character varying(255),
    phonecode character varying(255),
    is_active boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public.master_countries;
       public            MacV3khhqLb3qyb5    false            :           1259    18494    master_countries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.master_countries_id_seq;
       public          MacV3khhqLb3qyb5    false    315            �           0    0    master_countries_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.master_countries_id_seq OWNED BY public.master_countries.id;
          public          MacV3khhqLb3qyb5    false    314                       2604    18499    master_countries id    DEFAULT     z   ALTER TABLE ONLY public.master_countries ALTER COLUMN id SET DEFAULT nextval('public.master_countries_id_seq'::regclass);
 B   ALTER TABLE public.master_countries ALTER COLUMN id DROP DEFAULT;
       public          MacV3khhqLb3qyb5    false    315    314    315            �          0    18496    master_countries 
   TABLE DATA           �   COPY public.master_countries (id, iso, name, nicename, iso3, numcode, phonecode, is_active, "createdAt", "updatedAt") FROM stdin;
    public          MacV3khhqLb3qyb5    false    315   �       �           0    0    master_countries_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.master_countries_id_seq', 1, false);
          public          MacV3khhqLb3qyb5    false    314                       2606    18504 &   master_countries master_countries_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.master_countries
    ADD CONSTRAINT master_countries_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.master_countries DROP CONSTRAINT master_countries_pkey;
       public            MacV3khhqLb3qyb5    false    315            �      x��\Ys�H�~��x��X��8H��V A".� ��})Ih	c�Ѐ�=��/�,�x7��]�FT~u�YYe�X��K�Fe%R<<�c{:�#�'�f6��Y��#���5F�?,����ș���F����/��� ��y�ur��5��4߁X��CӃ�|'ȴ�2u��(I$ ��(E�� �;y4Jy�Б2!s��:�`cs�<+
�﻾�\ǟ�=�hR���@-�b&���A;��rPt[>%1�:��v��1%��S1�EpI|B%
��\ �,��3��'�2��a4 
ka`�O^=WH��E�xox���ܣcUH���r5a��% ��h x���l�ƺ#g�X������C�دHhlbYi�wo@��������m���T��M�F)�B�������=7�.ɞ���E �W�}E�"gD���0��N���Dt���[�����,[w�&�f�0!�$O,EY��Gy�'�%��M˱t�OA��"J�~/�#^�4�j��K���0��<>��}sz$/��xD�����<����<�A�,�w�£�ţ�+]!��-yAN @�����Lp�=�Us�	�L?���?���i<a1�I�"o��"�Jo�5h�����#]�l�n@<���s�g��5ӥ퐇���E����^R���n���
��f��{��U�U)A���������������	je<�n;d�r_i�eP�0[���ԀRj˦��<t_X�xђ��6\]��5�eU�
�|�*`#h
�l� �^�^��1�I^w�Ҝ��G���.�����E1y����F���mW�",�"��riD�<�����_^gdJߞ�ӣ�[��]��WM��]�|��� ��ċ:"c�R�1���֘�<;ɽ��)R�A�j�~�^H^����w�?HV�^����Ǻ���xX �Xa�Qb�/�g�tc!O>
r�,����"b��� L4[���d�u�;��Ւ|�xV	��p�a=�%�� ��b���0BPdY�M�uG��l@�Y�v\�GIŜ{p�ը��%]ag��_�Z렘���릿o���db}[����p��6�B���,9H��[��˴�)�����5��k����A^{q�O�!��Ѣy����;4p��S���a=Vs�pL�GyO�?e,h[�o6�1(G1���c��1����ڍv�O�4HC��K�2�u�I���䊨�`n�(��oOg��?�m�R��<g~V_���������Nx��`;>�����S]�ЁD�P�,�X�t��p��7d�J�jXH+��,Ɋ��s�z娃<��DW�;
!�!��:<�������//(��j� ��BT��ʡF��O�����������޽������@�W�����l�f�t����l$f�6�E~ze%�N�9��Qp\�/��\X�#]�CVD@�0���YT��}��c�a��"וK����E��Dw�s%�
*��jӇ�Q`��-�(C��ZSo>t�6g�~b�5���ͪ ��P�F}k�ߨ8���&��5��.�W4�D��9d����
璶^�]9�A��>T����v�s�o u`(hO��yB�,�R�ywh���D�eZ�A���<{�xc���1�+�:,^te*�'�Qj1�

�.�� �Z�GΦ D���Og~&��W��rMAl��Y����Q](�5�q�݅1��(�T8p,����@P𯋄���d/�������a9�}�P���g,	�a���TÂ�&`�e�q98�;�"��6�ڶ�ĥ ^-�,g��c�=1B��	�����+Z�x��E1O�`)���B�?��|ѓ�����o�J���L�pZdhG���y!��yUϋ"��L�_�����E��h�٢)�b2����F���Q����P�=�n��a@�Т�ǻ�kX#�u�e� � �6sr�j�7G(30&���z(�L{klL�+V���4(�W���?�z�eD6���L�zE,��A�=��x	����ߣImsz���tJ�@�By����E�.#�|�SNI(�K&�β��8#P�"d�M�?0� ,	5���0��L�HD��� ��x���st'�5)\o��j)/�5���&m���+D\��������������~צ��  ߇}Ӏ���'�������">�-�?���A�E��@��CE����\a1}�LG;j�N(�!��<��:�(�k���	#�düϴ�
\3J��xJ@�������VL�
�{�?7��(U �G���h�3�]/�������L�膛+��^T����|���I^ ��D�V��Xn��z�8��<h�-z�ֶ�8�������-eh�'���=�˄��(^�-����,�F�F�/6�ڐJ����)������Z�*�(�����c5p���
��WZBe��+�h�C��o�X����+�����2ES�y]�@w����3����r�������X�x�!w��x���Q�P[Z^���:軤{��������]�$5V���!�$��u#���Ϡ;!mo�w��9��s���΋����Aä�@��Kɏ�G�`5P<t�1ڈ��68��_���'n�'���>�2�$�/nx��u���������k'��Ǣ��9���sM��ʹZs4��B񖢳�?�3ٰ��Ň9��MB7"]����%�AF���,h��t��b.R��GT�h�/\}�p�&C)�L���zV��?��_�h���؉�R����7��Qe��-:�vf�9�U��n����g��Qn�.q�VJy�Q�j�����B��GԞ_���VY�o�.� ���o��d�����v�"o��}��b%/V�E;_˴iU�4�'My�⥃����0M�VZ��C��|�A��CVNt-9�t�j[��ݰ0����o��w����ԟ�	���E�}2�7E��O�O�����өߤ)�k�8�)�g�s�a�90bmm��D#c���i�R���cw�+0�ea��f� (�j��ԝ;�� q�v�=@pz���Si�q{���c+�� �.�I�C �a�Bxk�%D�V���0D/oV&�8��������QYiY��ⶹ{<7�ӹi��`.T[��B\�`��Ց��=?^ԡ����q8�^[B���k�߃���"�����p�]�~K٩�0cJ2J�fL����9�G�&���`0�����Ȋ$(�mf0*�?H_�����������C���C+��R9Y�Ʌak�3MkJI�f�E(J_hƽ|��;�S2Ɂ�����(��$6 ��k��s.����f�l�-{��A�-�rª&$E�f�y�JF�o�4'�њ�	B}���!�a|��pTW�km���IWjp�p��٨�
ȶ)Y�xQ.E��ٟ�~�iH�1�93B;�bBp&�����S0ع=���4��'��{�u�"U�ҷg%�Uۚ�0�&��+J{����pڊvxִ���%�ͪ���;���W�l �%�����ȇ0m���u\C�җ���	�	/�������`>D�J%Aۻ~��{s���j��҉��L� m,@��-sh�x���dE'�����';:�� ��A���Ą�T�HwG�#�G�����Tk�2�0�cA	�W�$�2�����VF�U�D9�����6'�QR=Ȋ�WC�ww<V�P1@N��|�`��eJu�x�L��lW�;��@>`�ú�'0'��9w���53�)�%�x�/�����P�����D�� X5�_��5�&�g��9�A.bJ�'�G���S$�� �'ـ�y��6��;h�4��%}bl|�78����4���~�_i�0��S������E<���j�r?أ���ěh�\1aW�;��
>2Ԯ�* �� �PŁH'o"�ѡ�|�H~N6���=�0��n�U�Nr��GjB���8OH;�NC��Ja� ׃#��������<��G3��J�b A
  ��/i��v���%Q?X�y�Tjs�?g�!#�/�x5D<�b$|�(���c�u���
�?͸�eį�k�"�n�� ,KP #��<�)�lf�C[�`��+��j�� ����	��}�==���Ţ���Po@{���?��%J�ޞ��`@��y��9����x���]����H����mA���?Xl�5u�p<�_�C�ka��n����"������css�}��A��J��a�ϔ[�լ��!\��y� O �vZ�	�&_�Dq��*���v�>=a�Nx��-�pr�NT������|'�L��AK{{ݜ�`�3%I�NIМ��@s�e Dp^�^Q�!���� C*��;�2�g~O^P^E��i���Kӟ;>���S�Y��m�N�$P8���*<�:ۃ�J�T(ue)���vG��U��� *2�D����(�H;�لI6��,+�^����tb�xu�U���6�E(�b��ՋN}��\���:�%?�rI����Xq o����l,�}s��6�H�v��!Z�W�UTU�ʻI�uT^1W��|R�6i�=���'L�Տ��&��=��襟��#�>_	� �}N"!�"A�E0$��c��ye��E���jJ�����_�Fش~��:J���j�҇,@%Ӈ����]��1@���_� S%^�% (l �n+.)ڔ	�/�K�L�D%��`� ,�`�;|(��lO��uBe�̨�d�XH�ԏ��K�Uw&5�]����9�9�UO��R�#�Y���U[dXŜ�Ǉ�f�;�K%�j�����ذVC]��[��Vsg�c1�w���Z^6����o1x�]-M[?���o[��e�|�ب�@��i�X����C�@q���-��7�# 娓0�P�!����a��|�z��9�8L�Ԝ�T���l�o�}�ÃE�^����O��>(u)C�[��u
�1�^{]��.=*��p���|�g�����أ�شM��t����J%Fb�?�Sځ0����'u��z�45AF�+.���z�U�o!}��_�Wn���«z�B>�m��9�͈֜Y:�k��'�*(�Ŀ�����<PD���H����g�q�\�`�5�ؘSYsZy�$�r��o��{� 	�ġ�D9q������Д3|�/G㓶�X�oV,������P����j^7JC?7��������������+_��>_���%���,������.}���M���peׄ|�䛨�m@��oC ����=L#X[��7�IX�3���̛��+���΅Ծy�m��JD�΋L��|/�p=F%ۯ�%��|��]�wWfT�2Åը?�3�nЈ�����?�k���R�����[� ��Jf���{�o�=+y�&U�J}ly����g��r���U:�iR�DoT�r`�Ao�6yc��������qŀ��������e�2�T���,̨�:T2t�3
�y�t�Z��*�k�}n8�Z�b�N-e��A��#�v?�8_]�?��*� ޣ��o�y|�jI���A�Vݭ�aCC��w�e�9�
,���iD���r�@�Ę�]��(@�X[��?7�\�)X�f� Q��B�A �o%�

��T?G��V��B ���&���q�(�/[�J��@�`�Mg|�M���^���i����k��g}�W�eQ���U���V�����7�i]5���π��|�g�u 8�0�.�C�Q�tc�D�4S�UD+�ZΔ9������v�0_z/�+�t|K�t��;��5!������|A�^���|ƴ�4��ؔ��G(#�Ҭ0�<�[���~h���Ǯ7��y�����_�o�K���V�4uQ{4u�%����#�m����vF�����xK.�T�0���5�EZ�
���E�/xU��qUJ��u���ʑ�ͱ�v�z�w�EڱS���_GAepͺm�F*x��C�qB>n�� �����`\/� <��8 ��\�O<��5�wh���h@�[���׿�~�_��+�������m�q�gQCC����t��r�������Z�p��,i��`���/!Oi�aϗ�?ʞolYB�Z�Y��An�q�6P��a
�E۽�]�%�.y��<��0���9D���.J<���ܵ�[y���K��P��za/q�k����SJ�����?,�7�Yc�'���_�!r��\��B�	y�L�4����]��:���e#��.�EI@o�o��	g6C�~���"�M�wo��!��f��"�?�h�/�9�}"/KET��7r���fT�[
�G�;ʶo���	.�*���X����<(�1����n�Ic�7�ׅ:��_zu�ï�^}�] &�֐%���	q���U[������%|X[8)S��	�q�@�AA��K7J���iz��M���ރ��~_�*+�uF���}���Ǐ4z�����Ρ'81,��u�Г��o��QB���q��_�4)Y\!��	W��l%bA���������	P�� �a����^���l*_���`��B�圦�ź@���/���k�M�     