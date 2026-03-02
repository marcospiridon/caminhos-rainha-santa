# coding=utf-8
import gpxpy
import matplotlib.pyplot as plt
import numpy as np

# Conteúdo do GPX fornecido (colado diretamente)
gpx_str = """<?xml version="1.0" encoding="utf-8"?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" version="1.1" creator="https://mapy.com/">
	<trk>
		<name>Route from Capela de Nossa Senhora da Ribeira to Castle of Bragança</name>
		<trkseg>
			<trkpt lat="41.734249" lon="-6.575570">
				<ele>586.000000</ele>
			</trkpt>
			<trkpt lat="41.734390" lon="-6.575650">
				<ele>585.000000</ele>
			</trkpt>
			<trkpt lat="41.734470" lon="-6.575874">
				<ele>583.000000</ele>
			</trkpt>
			<trkpt lat="41.734470" lon="-6.576260">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.734423" lon="-6.576602">
				<ele>578.000000</ele>
			</trkpt>
			<trkpt lat="41.734403" lon="-6.576764">
				<ele>577.000000</ele>
			</trkpt>
			<trkpt lat="41.734403" lon="-6.576962">
				<ele>575.000000</ele>
			</trkpt>
			<trkpt lat="41.734618" lon="-6.576170">
				<ele>578.000000</ele>
			</trkpt>
			<trkpt lat="41.734604" lon="-6.575793">
				<ele>579.000000</ele>
			</trkpt>
			<trkpt lat="41.734470" lon="-6.575030">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.734510" lon="-6.574742">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.734584" lon="-6.574608">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.734879" lon="-6.574832">
				<ele>577.000000</ele>
			</trkpt>
			<trkpt lat="41.735054" lon="-6.574814">
				<ele>574.000000</ele>
			</trkpt>
			<trkpt lat="41.735241" lon="-6.574581">
				<ele>570.000000</ele>
			</trkpt>
			<trkpt lat="41.735369" lon="-6.574222">
				<ele>567.000000</ele>
			</trkpt>
			<trkpt lat="41.735644" lon="-6.573826">
				<ele>564.000000</ele>
			</trkpt>
			<trkpt lat="41.735932" lon="-6.573593">
				<ele>562.000000</ele>
			</trkpt>
			<trkpt lat="41.736213" lon="-6.573377">
				<ele>558.000000</ele>
			</trkpt>
			<trkpt lat="41.736495" lon="-6.573333">
				<ele>553.000000</ele>
			</trkpt>
			<trkpt lat="41.737205" lon="-6.573090">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.737266" lon="-6.573063">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.737407" lon="-6.572910">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.737514" lon="-6.572650">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.737715" lon="-6.572308">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.737896" lon="-6.572084">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.738150" lon="-6.571652">
				<ele>553.000000</ele>
			</trkpt>
			<trkpt lat="41.738398" lon="-6.571392">
				<ele>556.000000</ele>
			</trkpt>
			<trkpt lat="41.738727" lon="-6.571096">
				<ele>559.000000</ele>
			</trkpt>
			<trkpt lat="41.738827" lon="-6.570970">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.738935" lon="-6.570727">
				<ele>559.000000</ele>
			</trkpt>
			<trkpt lat="41.739243" lon="-6.570054">
				<ele>557.000000</ele>
			</trkpt>
			<trkpt lat="41.739404" lon="-6.569667">
				<ele>556.000000</ele>
			</trkpt>
			<trkpt lat="41.739592" lon="-6.569317">
				<ele>555.000000</ele>
			</trkpt>
			<trkpt lat="41.739713" lon="-6.569012">
				<ele>554.000000</ele>
			</trkpt>
			<trkpt lat="41.739859" lon="-6.568625">
				<ele>553.000000</ele>
			</trkpt>
			<trkpt lat="41.740020" lon="-6.568239">
				<ele>552.000000</ele>
			</trkpt>
			<trkpt lat="41.740061" lon="-6.567880">
				<ele>551.000000</ele>
			</trkpt>
			<trkpt lat="41.740061" lon="-6.567413">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.740027" lon="-6.566909">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.740054" lon="-6.566667">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.740108" lon="-6.566433">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.740141" lon="-6.566298">
				<ele>549.000000</ele>
			</trkpt>
			<trkpt lat="41.740268" lon="-6.566092">
				<ele>547.000000</ele>
			</trkpt>
			<trkpt lat="41.740503" lon="-6.565813">
				<ele>545.000000</ele>
			</trkpt>
			<trkpt lat="41.740865" lon="-6.565643">
				<ele>542.000000</ele>
			</trkpt>
			<trkpt lat="41.740979" lon="-6.565679">
				<ele>541.000000</ele>
			</trkpt>
			<trkpt lat="41.741053" lon="-6.565733">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741087" lon="-6.565867">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741234" lon="-6.566065">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741274" lon="-6.566136">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741388" lon="-6.566325">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741442" lon="-6.566425">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741522" lon="-6.566559">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741669" lon="-6.566828">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741783" lon="-6.567170">
				<ele>540.000000</ele>
			</trkpt>
			<trkpt lat="41.741917" lon="-6.567520">
				<ele>541.000000</ele>
			</trkpt>
			<trkpt lat="41.742152" lon="-6.567916">
				<ele>542.000000</ele>
			</trkpt>
			<trkpt lat="41.742481" lon="-6.568400">
				<ele>544.000000</ele>
			</trkpt>
			<trkpt lat="41.742695" lon="-6.568670">
				<ele>545.000000</ele>
			</trkpt>
			<trkpt lat="41.743004" lon="-6.568966">
				<ele>547.000000</ele>
			</trkpt>
			<trkpt lat="41.743224" lon="-6.569201">
				<ele>548.000000</ele>
			</trkpt>
			<trkpt lat="41.743459" lon="-6.569362">
				<ele>549.000000</ele>
			</trkpt>
			<trkpt lat="41.743660" lon="-6.569559">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.743794" lon="-6.569631">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744009" lon="-6.569738">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744317" lon="-6.569784">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744478" lon="-6.569730">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744619" lon="-6.569721">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744826" lon="-6.569667">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.744940" lon="-6.569587">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745101" lon="-6.569371">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745343" lon="-6.569065">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745430" lon="-6.568948">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745483" lon="-6.568958">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745584" lon="-6.569092">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745725" lon="-6.569227">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.745866" lon="-6.569209">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.746006" lon="-6.569146">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.746287" lon="-6.568895">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.746401" lon="-6.568751">
				<ele>550.000000</ele>
			</trkpt>
			<trkpt lat="41.746489" lon="-6.568733">
				<ele>551.000000</ele>
			</trkpt>
			<trkpt lat="41.746556" lon="-6.568814">
				<ele>553.000000</ele>
			</trkpt>
			<trkpt lat="41.746690" lon="-6.568975">
				<ele>557.000000</ele>
			</trkpt>
			<trkpt lat="41.746824" lon="-6.569065">
				<ele>561.000000</ele>
			</trkpt>
			<trkpt lat="41.747079" lon="-6.569146">
				<ele>565.000000</ele>
			</trkpt>
			<trkpt lat="41.747567" lon="-6.569317">
				<ele>572.000000</ele>
			</trkpt>
			<trkpt lat="41.747816" lon="-6.569335">
				<ele>574.000000</ele>
			</trkpt>
			<trkpt lat="41.748037" lon="-6.569352">
				<ele>577.000000</ele>
			</trkpt>
			<trkpt lat="41.748231" lon="-6.569434">
				<ele>579.000000</ele>
			</trkpt>
			<trkpt lat="41.748453" lon="-6.569478">
				<ele>582.000000</ele>
			</trkpt>
			<trkpt lat="41.748701" lon="-6.569470">
				<ele>587.000000</ele>
			</trkpt>
			<trkpt lat="41.748848" lon="-6.569434">
				<ele>590.000000</ele>
			</trkpt>
			<trkpt lat="41.749129" lon="-6.569532">
				<ele>596.000000</ele>
			</trkpt>
			<trkpt lat="41.749230" lon="-6.569559">
				<ele>598.000000</ele>
			</trkpt>
			<trkpt lat="41.749397" lon="-6.569577">
				<ele>601.000000</ele>
			</trkpt>
			<trkpt lat="41.749599" lon="-6.569227">
				<ele>604.000000</ele>
			</trkpt>
			<trkpt lat="41.750122" lon="-6.568392">
				<ele>611.000000</ele>
			</trkpt>
			<trkpt lat="41.750148" lon="-6.568365">
				<ele>611.000000</ele>
			</trkpt>
			<trkpt lat="41.750235" lon="-6.568283">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.750268" lon="-6.568275">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.750268" lon="-6.568275">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.750389" lon="-6.568220">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.750617" lon="-6.568356">
				<ele>614.000000</ele>
			</trkpt>
			<trkpt lat="41.750765" lon="-6.568499">
				<ele>615.000000</ele>
			</trkpt>
			<trkpt lat="41.750859" lon="-6.568606">
				<ele>615.000000</ele>
			</trkpt>
			<trkpt lat="41.750905" lon="-6.568725">
				<ele>616.000000</ele>
			</trkpt>
			<trkpt lat="41.750912" lon="-6.568759">
				<ele>616.000000</ele>
			</trkpt>
			<trkpt lat="41.750952" lon="-6.568939">
				<ele>617.000000</ele>
			</trkpt>
			<trkpt lat="41.751120" lon="-6.569704">
				<ele>620.000000</ele>
			</trkpt>
			<trkpt lat="41.751107" lon="-6.569891">
				<ele>621.000000</ele>
			</trkpt>
			<trkpt lat="41.751167" lon="-6.569946">
				<ele>621.000000</ele>
			</trkpt>
			<trkpt lat="41.751274" lon="-6.570107">
				<ele>622.000000</ele>
			</trkpt>
			<trkpt lat="41.751488" lon="-6.570243">
				<ele>624.000000</ele>
			</trkpt>
			<trkpt lat="41.751662" lon="-6.570314">
				<ele>625.000000</ele>
			</trkpt>
			<trkpt lat="41.751743" lon="-6.570260">
				<ele>625.000000</ele>
			</trkpt>
			<trkpt lat="41.752038" lon="-6.570153">
				<ele>627.000000</ele>
			</trkpt>
			<trkpt lat="41.752206" lon="-6.570153">
				<ele>628.000000</ele>
			</trkpt>
			<trkpt lat="41.752420" lon="-6.570188">
				<ele>630.000000</ele>
			</trkpt>
			<trkpt lat="41.752721" lon="-6.570180">
				<ele>631.000000</ele>
			</trkpt>
			<trkpt lat="41.752976" lon="-6.570063">
				<ele>632.000000</ele>
			</trkpt>
			<trkpt lat="41.753204" lon="-6.569918">
				<ele>632.000000</ele>
			</trkpt>
			<trkpt lat="41.753331" lon="-6.569775">
				<ele>633.000000</ele>
			</trkpt>
			<trkpt lat="41.753553" lon="-6.569488">
				<ele>634.000000</ele>
			</trkpt>
			<trkpt lat="41.753673" lon="-6.569335">
				<ele>635.000000</ele>
			</trkpt>
			<trkpt lat="41.753787" lon="-6.569218">
				<ele>635.000000</ele>
			</trkpt>
			<trkpt lat="41.754062" lon="-6.569083">
				<ele>636.000000</ele>
			</trkpt>
			<trkpt lat="41.754477" lon="-6.568922">
				<ele>637.000000</ele>
			</trkpt>
			<trkpt lat="41.754779" lon="-6.568769">
				<ele>638.000000</ele>
			</trkpt>
			<trkpt lat="41.754939" lon="-6.568859">
				<ele>639.000000</ele>
			</trkpt>
			<trkpt lat="41.755013" lon="-6.569155">
				<ele>640.000000</ele>
			</trkpt>
			<trkpt lat="41.755154" lon="-6.569470">
				<ele>645.000000</ele>
			</trkpt>
			<trkpt lat="41.755281" lon="-6.569532">
				<ele>648.000000</ele>
			</trkpt>
			<trkpt lat="41.755436" lon="-6.569559">
				<ele>652.000000</ele>
			</trkpt>
			<trkpt lat="41.755509" lon="-6.569640">
				<ele>654.000000</ele>
			</trkpt>
			<trkpt lat="41.755463" lon="-6.569864">
				<ele>658.000000</ele>
			</trkpt>
			<trkpt lat="41.755402" lon="-6.570224">
				<ele>664.000000</ele>
			</trkpt>
			<trkpt lat="41.755375" lon="-6.570503">
				<ele>668.000000</ele>
			</trkpt>
			<trkpt lat="41.755369" lon="-6.570790">
				<ele>672.000000</ele>
			</trkpt>
			<trkpt lat="41.755389" lon="-6.571096">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.755442" lon="-6.571472">
				<ele>680.000000</ele>
			</trkpt>
			<trkpt lat="41.755503" lon="-6.571725">
				<ele>681.000000</ele>
			</trkpt>
			<trkpt lat="41.755623" lon="-6.571985">
				<ele>683.000000</ele>
			</trkpt>
			<trkpt lat="41.755711" lon="-6.572012">
				<ele>683.000000</ele>
			</trkpt>
			<trkpt lat="41.755851" lon="-6.571912">
				<ele>684.000000</ele>
			</trkpt>
			<trkpt lat="41.756099" lon="-6.571733">
				<ele>686.000000</ele>
			</trkpt>
			<trkpt lat="41.756253" lon="-6.571652">
				<ele>686.000000</ele>
			</trkpt>
			<trkpt lat="41.756367" lon="-6.571652">
				<ele>687.000000</ele>
			</trkpt>
			<trkpt lat="41.756575" lon="-6.571725">
				<ele>688.000000</ele>
			</trkpt>
			<trkpt lat="41.756823" lon="-6.571868">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.757070" lon="-6.572021">
				<ele>693.000000</ele>
			</trkpt>
			<trkpt lat="41.757184" lon="-6.572084">
				<ele>694.000000</ele>
			</trkpt>
			<trkpt lat="41.757412" lon="-6.572138">
				<ele>697.000000</ele>
			</trkpt>
			<trkpt lat="41.757647" lon="-6.572218">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.757922" lon="-6.572344">
				<ele>704.000000</ele>
			</trkpt>
			<trkpt lat="41.758357" lon="-6.572533">
				<ele>709.000000</ele>
			</trkpt>
			<trkpt lat="41.758518" lon="-6.572667">
				<ele>711.000000</ele>
			</trkpt>
			<trkpt lat="41.758666" lon="-6.572803">
				<ele>714.000000</ele>
			</trkpt>
			<trkpt lat="41.759081" lon="-6.573027">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.759356" lon="-6.573180">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.759584" lon="-6.573386">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.759825" lon="-6.573512">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.760046" lon="-6.573593">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.760046" lon="-6.573736">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.760254" lon="-6.573755">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.760461" lon="-6.573853">
				<ele>720.000000</ele>
			</trkpt>
			<trkpt lat="41.762183" lon="-6.574671">
				<ele>719.000000</ele>
			</trkpt>
			<trkpt lat="41.762244" lon="-6.574707">
				<ele>719.000000</ele>
			</trkpt>
			<trkpt lat="41.763464" lon="-6.575317">
				<ele>716.000000</ele>
			</trkpt>
			<trkpt lat="41.763852" lon="-6.575667">
				<ele>715.000000</ele>
			</trkpt>
			<trkpt lat="41.767162" lon="-6.578883">
				<ele>707.000000</ele>
			</trkpt>
			<trkpt lat="41.767839" lon="-6.579549">
				<ele>704.000000</ele>
			</trkpt>
			<trkpt lat="41.768743" lon="-6.580367">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.769192" lon="-6.580761">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.770063" lon="-6.581444">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.770425" lon="-6.581732">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.770867" lon="-6.581839">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.771490" lon="-6.581830">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.771939" lon="-6.581786">
				<ele>702.000000</ele>
			</trkpt>
			<trkpt lat="41.771980" lon="-6.581875">
				<ele>702.000000</ele>
			</trkpt>
			<trkpt lat="41.772247" lon="-6.581975">
				<ele>702.000000</ele>
			</trkpt>
			<trkpt lat="41.772883" lon="-6.582172">
				<ele>702.000000</ele>
			</trkpt>
			<trkpt lat="41.773520" lon="-6.582396">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.773962" lon="-6.582575">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.774190" lon="-6.582648">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.774746" lon="-6.582782">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.775108" lon="-6.582971">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.775570" lon="-6.583340">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.775918" lon="-6.584175">
				<ele>700.000000</ele>
			</trkpt>
			<trkpt lat="41.776595" lon="-6.585694">
				<ele>699.000000</ele>
			</trkpt>
			<trkpt lat="41.776776" lon="-6.586143">
				<ele>696.000000</ele>
			</trkpt>
			<trkpt lat="41.777004" lon="-6.586367">
				<ele>694.000000</ele>
			</trkpt>
			<trkpt lat="41.777305" lon="-6.586690">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.777560" lon="-6.586896">
				<ele>688.000000</ele>
			</trkpt>
			<trkpt lat="41.777694" lon="-6.586933">
				<ele>687.000000</ele>
			</trkpt>
			<trkpt lat="41.777968" lon="-6.587005">
				<ele>685.000000</ele>
			</trkpt>
			<trkpt lat="41.778337" lon="-6.587103">
				<ele>683.000000</ele>
			</trkpt>
			<trkpt lat="41.778458" lon="-6.587247">
				<ele>682.000000</ele>
			</trkpt>
			<trkpt lat="41.778685" lon="-6.587571">
				<ele>679.000000</ele>
			</trkpt>
			<trkpt lat="41.778926" lon="-6.587768">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.779543" lon="-6.588065">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.779924" lon="-6.588254">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.780333" lon="-6.588361">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.780420" lon="-6.588468">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.780748" lon="-6.588820">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.780983" lon="-6.588999">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.781178" lon="-6.589133">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782088" lon="-6.589906">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782222" lon="-6.590032">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782283" lon="-6.590212">
				<ele>671.000000</ele>
			</trkpt>
			<trkpt lat="41.782363" lon="-6.590221">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782450" lon="-6.590338">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782664" lon="-6.590248">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782738" lon="-6.590284">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.782993" lon="-6.590319">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.783127" lon="-6.590311">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.783307" lon="-6.590472">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.783361" lon="-6.590517">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.783629" lon="-6.590634">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.783843" lon="-6.590760">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.784312" lon="-6.590931">
				<ele>671.000000</ele>
			</trkpt>
			<trkpt lat="41.784680" lon="-6.590904">
				<ele>672.000000</ele>
			</trkpt>
			<trkpt lat="41.784781" lon="-6.590921">
				<ele>672.000000</ele>
			</trkpt>
			<trkpt lat="41.784935" lon="-6.590948">
				<ele>673.000000</ele>
			</trkpt>
			<trkpt lat="41.785169" lon="-6.591065">
				<ele>673.000000</ele>
			</trkpt>
			<trkpt lat="41.785377" lon="-6.591208">
				<ele>674.000000</ele>
			</trkpt>
			<trkpt lat="41.785612" lon="-6.591361">
				<ele>675.000000</ele>
			</trkpt>
			<trkpt lat="41.785920" lon="-6.591541">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.786201" lon="-6.591667">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.786469" lon="-6.591694">
				<ele>677.000000</ele>
			</trkpt>
			<trkpt lat="41.786683" lon="-6.591730">
				<ele>678.000000</ele>
			</trkpt>
			<trkpt lat="41.786931" lon="-6.591846">
				<ele>679.000000</ele>
			</trkpt>
			<trkpt lat="41.787031" lon="-6.591946">
				<ele>679.000000</ele>
			</trkpt>
			<trkpt lat="41.787434" lon="-6.591829">
				<ele>680.000000</ele>
			</trkpt>
			<trkpt lat="41.787574" lon="-6.591927">
				<ele>681.000000</ele>
			</trkpt>
			<trkpt lat="41.787762" lon="-6.592089">
				<ele>681.000000</ele>
			</trkpt>
			<trkpt lat="41.788083" lon="-6.592332">
				<ele>682.000000</ele>
			</trkpt>
			<trkpt lat="41.788438" lon="-6.592548">
				<ele>684.000000</ele>
			</trkpt>
			<trkpt lat="41.788853" lon="-6.592655">
				<ele>685.000000</ele>
			</trkpt>
			<trkpt lat="41.789215" lon="-6.592646">
				<ele>686.000000</ele>
			</trkpt>
			<trkpt lat="41.789738" lon="-6.592502">
				<ele>687.000000</ele>
			</trkpt>
			<trkpt lat="41.790153" lon="-6.592376">
				<ele>689.000000</ele>
			</trkpt>
			<trkpt lat="41.790314" lon="-6.592278">
				<ele>689.000000</ele>
			</trkpt>
			<trkpt lat="41.790514" lon="-6.592242">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.790883" lon="-6.592143">
				<ele>692.000000</ele>
			</trkpt>
			<trkpt lat="41.791084" lon="-6.592125">
				<ele>693.000000</ele>
			</trkpt>
			<trkpt lat="41.791291" lon="-6.592215">
				<ele>694.000000</ele>
			</trkpt>
			<trkpt lat="41.791426" lon="-6.592368">
				<ele>695.000000</ele>
			</trkpt>
			<trkpt lat="41.791579" lon="-6.592529">
				<ele>696.000000</ele>
			</trkpt>
			<trkpt lat="41.791720" lon="-6.592736">
				<ele>697.000000</ele>
			</trkpt>
			<trkpt lat="41.791908" lon="-6.593005">
				<ele>699.000000</ele>
			</trkpt>
			<trkpt lat="41.792182" lon="-6.593535">
				<ele>701.000000</ele>
			</trkpt>
			<trkpt lat="41.792457" lon="-6.593760">
				<ele>703.000000</ele>
			</trkpt>
			<trkpt lat="41.792677" lon="-6.594066">
				<ele>704.000000</ele>
			</trkpt>
			<trkpt lat="41.792798" lon="-6.594093">
				<ele>705.000000</ele>
			</trkpt>
			<trkpt lat="41.793060" lon="-6.594020">
				<ele>706.000000</ele>
			</trkpt>
			<trkpt lat="41.793374" lon="-6.593796">
				<ele>708.000000</ele>
			</trkpt>
			<trkpt lat="41.793696" lon="-6.593554">
				<ele>709.000000</ele>
			</trkpt>
			<trkpt lat="41.794031" lon="-6.593401">
				<ele>711.000000</ele>
			</trkpt>
			<trkpt lat="41.794312" lon="-6.593347">
				<ele>712.000000</ele>
			</trkpt>
			<trkpt lat="41.794674" lon="-6.593518">
				<ele>713.000000</ele>
			</trkpt>
			<trkpt lat="41.794941" lon="-6.593617">
				<ele>713.000000</ele>
			</trkpt>
			<trkpt lat="41.795317" lon="-6.593508">
				<ele>715.000000</ele>
			</trkpt>
			<trkpt lat="41.795591" lon="-6.593454">
				<ele>715.000000</ele>
			</trkpt>
			<trkpt lat="41.796134" lon="-6.593374">
				<ele>717.000000</ele>
			</trkpt>
			<trkpt lat="41.796884" lon="-6.593231">
				<ele>719.000000</ele>
			</trkpt>
			<trkpt lat="41.797460" lon="-6.593024">
				<ele>721.000000</ele>
			</trkpt>
			<trkpt lat="41.797768" lon="-6.593104">
				<ele>721.000000</ele>
			</trkpt>
			<trkpt lat="41.798002" lon="-6.593149">
				<ele>722.000000</ele>
			</trkpt>
			<trkpt lat="41.798290" lon="-6.592969">
				<ele>722.000000</ele>
			</trkpt>
			<trkpt lat="41.798458" lon="-6.593015">
				<ele>722.000000</ele>
			</trkpt>
			<trkpt lat="41.798698" lon="-6.593185">
				<ele>723.000000</ele>
			</trkpt>
			<trkpt lat="41.798946" lon="-6.593590">
				<ele>724.000000</ele>
			</trkpt>
			<trkpt lat="41.799007" lon="-6.593831">
				<ele>724.000000</ele>
			</trkpt>
			<trkpt lat="41.799181" lon="-6.594011">
				<ele>724.000000</ele>
			</trkpt>
			<trkpt lat="41.799254" lon="-6.594156">
				<ele>725.000000</ele>
			</trkpt>
			<trkpt lat="41.799315" lon="-6.594326">
				<ele>725.000000</ele>
			</trkpt>
			<trkpt lat="41.799435" lon="-6.594550">
				<ele>725.000000</ele>
			</trkpt>
			<trkpt lat="41.799516" lon="-6.594793">
				<ele>726.000000</ele>
			</trkpt>
			<trkpt lat="41.799629" lon="-6.595072">
				<ele>726.000000</ele>
			</trkpt>
			<trkpt lat="41.799984" lon="-6.595602">
				<ele>727.000000</ele>
			</trkpt>
			<trkpt lat="41.800125" lon="-6.595934">
				<ele>728.000000</ele>
			</trkpt>
			<trkpt lat="41.800225" lon="-6.596437">
				<ele>728.000000</ele>
			</trkpt>
			<trkpt lat="41.800366" lon="-6.596913">
				<ele>729.000000</ele>
			</trkpt>
			<trkpt lat="41.800534" lon="-6.597489">
				<ele>730.000000</ele>
			</trkpt>
			<trkpt lat="41.800687" lon="-6.597649">
				<ele>730.000000</ele>
			</trkpt>
			<trkpt lat="41.800922" lon="-6.598081">
				<ele>732.000000</ele>
			</trkpt>
			<trkpt lat="41.801016" lon="-6.598458">
				<ele>733.000000</ele>
			</trkpt>
			<trkpt lat="41.801236" lon="-6.599024">
				<ele>734.000000</ele>
			</trkpt>
			<trkpt lat="41.801518" lon="-6.599599">
				<ele>736.000000</ele>
			</trkpt>
			<trkpt lat="41.801491" lon="-6.600102">
				<ele>737.000000</ele>
			</trkpt>
			<trkpt lat="41.801531" lon="-6.600615">
				<ele>739.000000</ele>
			</trkpt>
			<trkpt lat="41.801632" lon="-6.601009">
				<ele>740.000000</ele>
			</trkpt>
			<trkpt lat="41.801745" lon="-6.601288">
				<ele>740.000000</ele>
			</trkpt>
			<trkpt lat="41.802020" lon="-6.601710">
				<ele>741.000000</ele>
			</trkpt>
			<trkpt lat="41.802094" lon="-6.602060">
				<ele>742.000000</ele>
			</trkpt>
			<trkpt lat="41.802402" lon="-6.601988">
				<ele>743.000000</ele>
			</trkpt>
			<trkpt lat="41.802489" lon="-6.601836">
				<ele>743.000000</ele>
			</trkpt>
			<trkpt lat="41.802590" lon="-6.601764">
				<ele>743.000000</ele>
			</trkpt>
			<trkpt lat="41.802924" lon="-6.601665">
				<ele>744.000000</ele>
			</trkpt>
			<trkpt lat="41.803132" lon="-6.601728">
				<ele>745.000000</ele>
			</trkpt>
			<trkpt lat="41.803219" lon="-6.601907">
				<ele>745.000000</ele>
			</trkpt>
			<trkpt lat="41.803594" lon="-6.602402">
				<ele>747.000000</ele>
			</trkpt>
			<trkpt lat="41.803547" lon="-6.602699">
				<ele>747.000000</ele>
			</trkpt>
			<trkpt lat="41.803574" lon="-6.602842">
				<ele>747.000000</ele>
			</trkpt>
			<trkpt lat="41.803728" lon="-6.603129">
				<ele>748.000000</ele>
			</trkpt>
			<trkpt lat="41.803741" lon="-6.603416">
				<ele>749.000000</ele>
			</trkpt>
			<trkpt lat="41.803842" lon="-6.604018">
				<ele>750.000000</ele>
			</trkpt>
			<trkpt lat="41.804103" lon="-6.603857">
				<ele>750.000000</ele>
			</trkpt>
			<trkpt lat="41.804599" lon="-6.603542">
				<ele>752.000000</ele>
			</trkpt>
			<trkpt lat="41.804779" lon="-6.603426">
				<ele>752.000000</ele>
			</trkpt>
			<trkpt lat="41.805007" lon="-6.603389">
				<ele>753.000000</ele>
			</trkpt>
			<trkpt lat="41.805301" lon="-6.603399">
				<ele>754.000000</ele>
			</trkpt>
			<trkpt lat="41.805656" lon="-6.603506">
				<ele>754.000000</ele>
			</trkpt>
			<trkpt lat="41.806185" lon="-6.603605">
				<ele>756.000000</ele>
			</trkpt>
			<trkpt lat="41.806634" lon="-6.603632">
				<ele>757.000000</ele>
			</trkpt>
			<trkpt lat="41.807002" lon="-6.603569">
				<ele>758.000000</ele>
			</trkpt>
			<trkpt lat="41.807611" lon="-6.603273">
				<ele>760.000000</ele>
			</trkpt>
			<trkpt lat="41.807959" lon="-6.603228">
				<ele>761.000000</ele>
			</trkpt>
			<trkpt lat="41.808194" lon="-6.603345">
				<ele>762.000000</ele>
			</trkpt>
			<trkpt lat="41.808696" lon="-6.603615">
				<ele>765.000000</ele>
			</trkpt>
			<trkpt lat="41.809192" lon="-6.603714">
				<ele>767.000000</ele>
			</trkpt>
			<trkpt lat="41.809480" lon="-6.603776">
				<ele>768.000000</ele>
			</trkpt>
			<trkpt lat="41.809828" lon="-6.603974">
				<ele>771.000000</ele>
			</trkpt>
			<trkpt lat="41.810062" lon="-6.604261">
				<ele>775.000000</ele>
			</trkpt>
			<trkpt lat="41.810424" lon="-6.604836">
				<ele>781.000000</ele>
			</trkpt>
			<trkpt lat="41.810658" lon="-6.605150">
				<ele>783.000000</ele>
			</trkpt>
			<trkpt lat="41.811006" lon="-6.605528">
				<ele>785.000000</ele>
			</trkpt>
			<trkpt lat="41.811609" lon="-6.605942">
				<ele>788.000000</ele>
			</trkpt>
			<trkpt lat="41.812097" lon="-6.606391">
				<ele>790.000000</ele>
			</trkpt>
			<trkpt lat="41.812332" lon="-6.606454">
				<ele>790.000000</ele>
			</trkpt>
			<trkpt lat="41.812566" lon="-6.606462">
				<ele>790.000000</ele>
			</trkpt>
			<trkpt lat="41.813524" lon="-6.606121">
				<ele>790.000000</ele>
			</trkpt>
			<trkpt lat="41.813872" lon="-6.606076">
				<ele>790.000000</ele>
			</trkpt>
			<trkpt lat="41.814012" lon="-6.606094">
				<ele>791.000000</ele>
			</trkpt>
			<trkpt lat="41.814441" lon="-6.606489">
				<ele>792.000000</ele>
			</trkpt>
			<trkpt lat="41.814849" lon="-6.606884">
				<ele>793.000000</ele>
			</trkpt>
			<trkpt lat="41.815204" lon="-6.607280">
				<ele>795.000000</ele>
			</trkpt>
			<trkpt lat="41.815318" lon="-6.607613">
				<ele>796.000000</ele>
			</trkpt>
			<trkpt lat="41.815345" lon="-6.608232">
				<ele>797.000000</ele>
			</trkpt>
			<trkpt lat="41.815479" lon="-6.609104">
				<ele>799.000000</ele>
			</trkpt>
			<trkpt lat="41.815466" lon="-6.609534">
				<ele>800.000000</ele>
			</trkpt>
			<trkpt lat="41.815592" lon="-6.610064">
				<ele>801.000000</ele>
			</trkpt>
			<trkpt lat="41.815854" lon="-6.610450">
				<ele>802.000000</ele>
			</trkpt>
			<trkpt lat="41.816309" lon="-6.611322">
				<ele>805.000000</ele>
			</trkpt>
			<trkpt lat="41.816570" lon="-6.611897">
				<ele>806.000000</ele>
			</trkpt>
			<trkpt lat="41.816717" lon="-6.612058">
				<ele>807.000000</ele>
			</trkpt>
			<trkpt lat="41.816764" lon="-6.612355">
				<ele>808.000000</ele>
			</trkpt>
			<trkpt lat="41.816878" lon="-6.612867">
				<ele>809.000000</ele>
			</trkpt>
			<trkpt lat="41.817193" lon="-6.613748">
				<ele>814.000000</ele>
			</trkpt>
			<trkpt lat="41.817367" lon="-6.614412">
				<ele>818.000000</ele>
			</trkpt>
			<trkpt lat="41.817440" lon="-6.614511">
				<ele>818.000000</ele>
			</trkpt>
			<trkpt lat="41.817521" lon="-6.614521">
				<ele>819.000000</ele>
			</trkpt>
			<trkpt lat="41.817708" lon="-6.614691">
				<ele>820.000000</ele>
			</trkpt>
			<trkpt lat="41.817748" lon="-6.614771">
				<ele>820.000000</ele>
			</trkpt>
			<trkpt lat="41.817708" lon="-6.615140">
				<ele>821.000000</ele>
			</trkpt>
			<trkpt lat="41.817768" lon="-6.615418">
				<ele>822.000000</ele>
			</trkpt>
			<trkpt lat="41.817943" lon="-6.615922">
				<ele>823.000000</ele>
			</trkpt>
			<trkpt lat="41.818358" lon="-6.617035">
				<ele>825.000000</ele>
			</trkpt>
			<trkpt lat="41.818699" lon="-6.617853">
				<ele>826.000000</ele>
			</trkpt>
			<trkpt lat="41.818826" lon="-6.618194">
				<ele>827.000000</ele>
			</trkpt>
			<trkpt lat="41.818960" lon="-6.618410">
				<ele>828.000000</ele>
			</trkpt>
			<trkpt lat="41.819114" lon="-6.618643">
				<ele>828.000000</ele>
			</trkpt>
			<trkpt lat="41.819121" lon="-6.618823">
				<ele>828.000000</ele>
			</trkpt>
			<trkpt lat="41.819087" lon="-6.618976">
				<ele>829.000000</ele>
			</trkpt>
			<trkpt lat="41.819121" lon="-6.619110">
				<ele>829.000000</ele>
			</trkpt>
			<trkpt lat="41.819228" lon="-6.619245">
				<ele>829.000000</ele>
			</trkpt>
			<trkpt lat="41.819422" lon="-6.619362">
				<ele>830.000000</ele>
			</trkpt>
			<trkpt lat="41.819469" lon="-6.619469">
				<ele>830.000000</ele>
			</trkpt>
			<trkpt lat="41.819496" lon="-6.619542">
				<ele>831.000000</ele>
			</trkpt>
			<trkpt lat="41.819475" lon="-6.619668">
				<ele>831.000000</ele>
			</trkpt>
			<trkpt lat="41.819295" lon="-6.619829">
				<ele>832.000000</ele>
			</trkpt>
			<trkpt lat="41.819027" lon="-6.620081">
				<ele>834.000000</ele>
			</trkpt>
			<trkpt lat="41.818598" lon="-6.620404">
				<ele>838.000000</ele>
			</trkpt>
			<trkpt lat="41.818492" lon="-6.620656">
				<ele>839.000000</ele>
			</trkpt>
			<trkpt lat="41.818391" lon="-6.620997">
				<ele>841.000000</ele>
			</trkpt>
			<trkpt lat="41.818384" lon="-6.621249">
				<ele>842.000000</ele>
			</trkpt>
			<trkpt lat="41.818431" lon="-6.621482">
				<ele>844.000000</ele>
			</trkpt>
			<trkpt lat="41.818538" lon="-6.621823">
				<ele>846.000000</ele>
			</trkpt>
			<trkpt lat="41.818632" lon="-6.622075">
				<ele>848.000000</ele>
			</trkpt>
			<trkpt lat="41.818639" lon="-6.622345">
				<ele>850.000000</ele>
			</trkpt>
			<trkpt lat="41.818605" lon="-6.622551">
				<ele>851.000000</ele>
			</trkpt>
			<trkpt lat="41.818492" lon="-6.622920">
				<ele>853.000000</ele>
			</trkpt>
			<trkpt lat="41.818338" lon="-6.623314">
				<ele>855.000000</ele>
			</trkpt>
			<trkpt lat="41.818050" lon="-6.624142">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817943" lon="-6.624492">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817943" lon="-6.624689">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817835" lon="-6.625058">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817748" lon="-6.625237">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817574" lon="-6.625587">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.817279" lon="-6.625964">
				<ele>860.000000</ele>
			</trkpt>
			<trkpt lat="41.816871" lon="-6.626540">
				<ele>858.000000</ele>
			</trkpt>
			<trkpt lat="41.816671" lon="-6.626809">
				<ele>857.000000</ele>
			</trkpt>
			<trkpt lat="41.816383" lon="-6.627195">
				<ele>856.000000</ele>
			</trkpt>
			<trkpt lat="41.816155" lon="-6.627591">
				<ele>854.000000</ele>
			</trkpt>
			<trkpt lat="41.816014" lon="-6.627771">
				<ele>854.000000</ele>
			</trkpt>
			<trkpt lat="41.815780" lon="-6.627958">
				<ele>853.000000</ele>
			</trkpt>
			<trkpt lat="41.815479" lon="-6.628148">
				<ele>852.000000</ele>
			</trkpt>
			<trkpt lat="41.815244" lon="-6.628417">
				<ele>850.000000</ele>
			</trkpt>
			<trkpt lat="41.814896" lon="-6.628794">
				<ele>848.000000</ele>
			</trkpt>
			<trkpt lat="41.814542" lon="-6.629144">
				<ele>846.000000</ele>
			</trkpt>
			<trkpt lat="41.814307" lon="-6.629576">
				<ele>844.000000</ele>
			</trkpt>
			<trkpt lat="41.814160" lon="-6.629855">
				<ele>843.000000</ele>
			</trkpt>
			<trkpt lat="41.814106" lon="-6.630106">
				<ele>842.000000</ele>
			</trkpt>
			<trkpt lat="41.814046" lon="-6.630285">
				<ele>842.000000</ele>
			</trkpt>
			<trkpt lat="41.813898" lon="-6.630545">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.813752" lon="-6.630842">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.813584" lon="-6.631220">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.813303" lon="-6.631148">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.813149" lon="-6.631228">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.813041" lon="-6.632136">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.812814" lon="-6.632711">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.812640" lon="-6.632998">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.812117" lon="-6.633700">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.811743" lon="-6.633861">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.811261" lon="-6.634193">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810866" lon="-6.634589">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810585" lon="-6.635029">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810491" lon="-6.635343">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810430" lon="-6.635811">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810457" lon="-6.637149">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810591" lon="-6.637795">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810672" lon="-6.638442">
				<ele>840.000000</ele>
			</trkpt>
			<trkpt lat="41.810866" lon="-6.639143">
				<ele>841.000000</ele>
			</trkpt>
			<trkpt lat="41.810912" lon="-6.639727">
				<ele>842.000000</ele>
			</trkpt>
			<trkpt lat="41.810772" lon="-6.640132">
				<ele>844.000000</ele>
			</trkpt>
			<trkpt lat="41.810718" lon="-6.640472">
				<ele>845.000000</ele>
			</trkpt>
			<trkpt lat="41.810738" lon="-6.641048">
				<ele>847.000000</ele>
			</trkpt>
			<trkpt lat="41.810691" lon="-6.641371">
				<ele>848.000000</ele>
			</trkpt>
			<trkpt lat="41.810591" lon="-6.641685">
				<ele>849.000000</ele>
			</trkpt>
			<trkpt lat="41.810404" lon="-6.642044">
				<ele>850.000000</ele>
			</trkpt>
			<trkpt lat="41.809962" lon="-6.642466">
				<ele>853.000000</ele>
			</trkpt>
			<trkpt lat="41.809667" lon="-6.642493">
				<ele>855.000000</ele>
			</trkpt>
			<trkpt lat="41.808656" lon="-6.642782">
				<ele>861.000000</ele>
			</trkpt>
			<trkpt lat="41.808167" lon="-6.643293">
				<ele>865.000000</ele>
			</trkpt>
			<trkpt lat="41.808093" lon="-6.643877">
				<ele>867.000000</ele>
			</trkpt>
			<trkpt lat="41.808161" lon="-6.644479">
				<ele>870.000000</ele>
			</trkpt>
			<trkpt lat="41.808167" lon="-6.645782">
				<ele>878.000000</ele>
			</trkpt>
			<trkpt lat="41.808006" lon="-6.647021">
				<ele>880.000000</ele>
			</trkpt>
			<trkpt lat="41.808026" lon="-6.647317">
				<ele>880.000000</ele>
			</trkpt>
			<trkpt lat="41.807946" lon="-6.647964">
				<ele>878.000000</ele>
			</trkpt>
			<trkpt lat="41.808020" lon="-6.648619">
				<ele>874.000000</ele>
			</trkpt>
			<trkpt lat="41.807920" lon="-6.649904">
				<ele>867.000000</ele>
			</trkpt>
			<trkpt lat="41.808000" lon="-6.651432">
				<ele>858.000000</ele>
			</trkpt>
			<trkpt lat="41.807873" lon="-6.652277">
				<ele>854.000000</ele>
			</trkpt>
			<trkpt lat="41.807833" lon="-6.652995">
				<ele>850.000000</ele>
			</trkpt>
			<trkpt lat="41.807893" lon="-6.653911">
				<ele>847.000000</ele>
			</trkpt>
			<trkpt lat="41.807959" lon="-6.654890">
				<ele>843.000000</ele>
			</trkpt>
			<trkpt lat="41.807959" lon="-6.655879">
				<ele>839.000000</ele>
			</trkpt>
			<trkpt lat="41.808080" lon="-6.657577">
				<ele>831.000000</ele>
			</trkpt>
			<trkpt lat="41.808087" lon="-6.658520">
				<ele>826.000000</ele>
			</trkpt>
			<trkpt lat="41.808147" lon="-6.659005">
				<ele>823.000000</ele>
			</trkpt>
			<trkpt lat="41.808389" lon="-6.659795">
				<ele>818.000000</ele>
			</trkpt>
			<trkpt lat="41.808435" lon="-6.660091">
				<ele>815.000000</ele>
			</trkpt>
			<trkpt lat="41.808421" lon="-6.660351">
				<ele>813.000000</ele>
			</trkpt>
			<trkpt lat="41.807705" lon="-6.661816">
				<ele>795.000000</ele>
			</trkpt>
			<trkpt lat="41.807444" lon="-6.662714">
				<ele>784.000000</ele>
			</trkpt>
			<trkpt lat="41.807317" lon="-6.662984">
				<ele>780.000000</ele>
			</trkpt>
			<trkpt lat="41.807230" lon="-6.663667">
				<ele>772.000000</ele>
			</trkpt>
			<trkpt lat="41.807002" lon="-6.664368">
				<ele>766.000000</ele>
			</trkpt>
			<trkpt lat="41.806949" lon="-6.664529">
				<ele>764.000000</ele>
			</trkpt>
			<trkpt lat="41.806775" lon="-6.665724">
				<ele>758.000000</ele>
			</trkpt>
			<trkpt lat="41.806640" lon="-6.666353">
				<ele>756.000000</ele>
			</trkpt>
			<trkpt lat="41.806487" lon="-6.666820">
				<ele>754.000000</ele>
			</trkpt>
			<trkpt lat="41.806447" lon="-6.667062">
				<ele>753.000000</ele>
			</trkpt>
			<trkpt lat="41.806433" lon="-6.667584">
				<ele>752.000000</ele>
			</trkpt>
			<trkpt lat="41.806359" lon="-6.667835">
				<ele>751.000000</ele>
			</trkpt>
			<trkpt lat="41.805891" lon="-6.668571">
				<ele>741.000000</ele>
			</trkpt>
			<trkpt lat="41.805556" lon="-6.669353">
				<ele>735.000000</ele>
			</trkpt>
			<trkpt lat="41.805234" lon="-6.670072">
				<ele>731.000000</ele>
			</trkpt>
			<trkpt lat="41.804779" lon="-6.671167">
				<ele>728.000000</ele>
			</trkpt>
			<trkpt lat="41.804572" lon="-6.671733">
				<ele>727.000000</ele>
			</trkpt>
			<trkpt lat="41.804464" lon="-6.672416">
				<ele>725.000000</ele>
			</trkpt>
			<trkpt lat="41.804324" lon="-6.672838">
				<ele>725.000000</ele>
			</trkpt>
			<trkpt lat="41.804070" lon="-6.673458">
				<ele>723.000000</ele>
			</trkpt>
			<trkpt lat="41.804163" lon="-6.674016">
				<ele>722.000000</ele>
			</trkpt>
			<trkpt lat="41.804397" lon="-6.674106">
				<ele>722.000000</ele>
			</trkpt>
			<trkpt lat="41.804599" lon="-6.674465">
				<ele>721.000000</ele>
			</trkpt>
			<trkpt lat="41.804973" lon="-6.674886">
				<ele>717.000000</ele>
			</trkpt>
			<trkpt lat="41.805127" lon="-6.675112">
				<ele>715.000000</ele>
			</trkpt>
			<trkpt lat="41.805335" lon="-6.675534">
				<ele>710.000000</ele>
			</trkpt>
			<trkpt lat="41.805589" lon="-6.676154">
				<ele>703.000000</ele>
			</trkpt>
			<trkpt lat="41.805683" lon="-6.676584">
				<ele>698.000000</ele>
			</trkpt>
			<trkpt lat="41.805716" lon="-6.677115">
				<ele>693.000000</ele>
			</trkpt>
			<trkpt lat="41.805683" lon="-6.677626">
				<ele>687.000000</ele>
			</trkpt>
			<trkpt lat="41.805576" lon="-6.678121">
				<ele>682.000000</ele>
			</trkpt>
			<trkpt lat="41.805375" lon="-6.678777">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.805174" lon="-6.679118">
				<ele>673.000000</ele>
			</trkpt>
			<trkpt lat="41.804859" lon="-6.679504">
				<ele>668.000000</ele>
			</trkpt>
			<trkpt lat="41.804672" lon="-6.679890">
				<ele>662.000000</ele>
			</trkpt>
			<trkpt lat="41.804418" lon="-6.680645">
				<ele>654.000000</ele>
			</trkpt>
			<trkpt lat="41.804223" lon="-6.681139">
				<ele>649.000000</ele>
			</trkpt>
			<trkpt lat="41.804016" lon="-6.681544">
				<ele>643.000000</ele>
			</trkpt>
			<trkpt lat="41.803962" lon="-6.681641">
				<ele>642.000000</ele>
			</trkpt>
			<trkpt lat="41.803359" lon="-6.682297">
				<ele>630.000000</ele>
			</trkpt>
			<trkpt lat="41.802978" lon="-6.682765">
				<ele>627.000000</ele>
			</trkpt>
			<trkpt lat="41.802509" lon="-6.683223">
				<ele>625.000000</ele>
			</trkpt>
			<trkpt lat="41.801993" lon="-6.683601">
				<ele>622.000000</ele>
			</trkpt>
			<trkpt lat="41.801933" lon="-6.683834">
				<ele>621.000000</ele>
			</trkpt>
			<trkpt lat="41.801940" lon="-6.684454">
				<ele>617.000000</ele>
			</trkpt>
			<trkpt lat="41.801859" lon="-6.684597">
				<ele>614.000000</ele>
			</trkpt>
			<trkpt lat="41.801651" lon="-6.684804">
				<ele>609.000000</ele>
			</trkpt>
			<trkpt lat="41.801538" lon="-6.685226">
				<ele>603.000000</ele>
			</trkpt>
			<trkpt lat="41.801565" lon="-6.685568">
				<ele>599.000000</ele>
			</trkpt>
			<trkpt lat="41.801712" lon="-6.685909">
				<ele>594.000000</ele>
			</trkpt>
			<trkpt lat="41.802054" lon="-6.686278">
				<ele>588.000000</ele>
			</trkpt>
			<trkpt lat="41.802301" lon="-6.686341">
				<ele>586.000000</ele>
			</trkpt>
			<trkpt lat="41.802529" lon="-6.686421">
				<ele>583.000000</ele>
			</trkpt>
			<trkpt lat="41.802757" lon="-6.686448">
				<ele>581.000000</ele>
			</trkpt>
			<trkpt lat="41.802797" lon="-6.686628">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.802804" lon="-6.687077">
				<ele>577.000000</ele>
			</trkpt>
			<trkpt lat="41.802884" lon="-6.687373">
				<ele>576.000000</ele>
			</trkpt>
			<trkpt lat="41.802877" lon="-6.687750">
				<ele>574.000000</ele>
			</trkpt>
			<trkpt lat="41.802763" lon="-6.688128">
				<ele>571.000000</ele>
			</trkpt>
			<trkpt lat="41.802669" lon="-6.688245">
				<ele>570.000000</ele>
			</trkpt>
			<trkpt lat="41.802783" lon="-6.689161">
				<ele>565.000000</ele>
			</trkpt>
			<trkpt lat="41.802730" lon="-6.689681">
				<ele>562.000000</ele>
			</trkpt>
			<trkpt lat="41.802804" lon="-6.690069">
				<ele>559.000000</ele>
			</trkpt>
			<trkpt lat="41.802924" lon="-6.690347">
				<ele>557.000000</ele>
			</trkpt>
			<trkpt lat="41.802991" lon="-6.690662">
				<ele>554.000000</ele>
			</trkpt>
			<trkpt lat="41.803259" lon="-6.691299">
				<ele>547.000000</ele>
			</trkpt>
			<trkpt lat="41.803520" lon="-6.692180">
				<ele>535.000000</ele>
			</trkpt>
			<trkpt lat="41.804344" lon="-6.693581">
				<ele>522.000000</ele>
			</trkpt>
			<trkpt lat="41.804136" lon="-6.693823">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.804210" lon="-6.694299">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.804304" lon="-6.694731">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.804310" lon="-6.694838">
				<ele>516.000000</ele>
			</trkpt>
			<trkpt lat="41.804337" lon="-6.694981">
				<ele>516.000000</ele>
			</trkpt>
			<trkpt lat="41.804290" lon="-6.695071">
				<ele>516.000000</ele>
			</trkpt>
			<trkpt lat="41.804223" lon="-6.695180">
				<ele>516.000000</ele>
			</trkpt>
			<trkpt lat="41.804083" lon="-6.695314">
				<ele>516.000000</ele>
			</trkpt>
			<trkpt lat="41.803949" lon="-6.695476">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.803935" lon="-6.695521">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.803949" lon="-6.695566">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.804076" lon="-6.695863">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.804049" lon="-6.696213">
				<ele>517.000000</ele>
			</trkpt>
			<trkpt lat="41.804016" lon="-6.696509">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.804002" lon="-6.696725">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.804002" lon="-6.696977">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.804023" lon="-6.697218">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.803949" lon="-6.697245">
				<ele>518.000000</ele>
			</trkpt>
			<trkpt lat="41.803326" lon="-6.697444">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.803286" lon="-6.697461">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.803286" lon="-6.697587">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.803279" lon="-6.697713">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.803279" lon="-6.697964">
				<ele>519.000000</ele>
			</trkpt>
			<trkpt lat="41.803279" lon="-6.698197">
				<ele>520.000000</ele>
			</trkpt>
			<trkpt lat="41.803245" lon="-6.698396">
				<ele>520.000000</ele>
			</trkpt>
			<trkpt lat="41.803178" lon="-6.698495">
				<ele>520.000000</ele>
			</trkpt>
			<trkpt lat="41.803018" lon="-6.699052">
				<ele>521.000000</ele>
			</trkpt>
			<trkpt lat="41.802978" lon="-6.699178">
				<ele>521.000000</ele>
			</trkpt>
			<trkpt lat="41.802985" lon="-6.699447">
				<ele>522.000000</ele>
			</trkpt>
			<trkpt lat="41.802978" lon="-6.699958">
				<ele>523.000000</ele>
			</trkpt>
			<trkpt lat="41.802449" lon="-6.699958">
				<ele>524.000000</ele>
			</trkpt>
			<trkpt lat="41.802207" lon="-6.699797">
				<ele>525.000000</ele>
			</trkpt>
			<trkpt lat="41.801833" lon="-6.699384">
				<ele>527.000000</ele>
			</trkpt>
			<trkpt lat="41.801719" lon="-6.699276">
				<ele>527.000000</ele>
			</trkpt>
			<trkpt lat="41.801612" lon="-6.699231">
				<ele>527.000000</ele>
			</trkpt>
			<trkpt lat="41.801518" lon="-6.699465">
				<ele>528.000000</ele>
			</trkpt>
			<trkpt lat="41.801451" lon="-6.699681">
				<ele>529.000000</ele>
			</trkpt>
			<trkpt lat="41.801458" lon="-6.699834">
				<ele>529.000000</ele>
			</trkpt>
			<trkpt lat="41.801424" lon="-6.699968">
				<ele>529.000000</ele>
			</trkpt>
			<trkpt lat="41.801303" lon="-6.700345">
				<ele>530.000000</ele>
			</trkpt>
			<trkpt lat="41.801083" lon="-6.700390">
				<ele>533.000000</ele>
			</trkpt>
			<trkpt lat="41.800654" lon="-6.701513">
				<ele>543.000000</ele>
			</trkpt>
			<trkpt lat="41.800621" lon="-6.701855">
				<ele>546.000000</ele>
			</trkpt>
			<trkpt lat="41.800815" lon="-6.702600">
				<ele>552.000000</ele>
			</trkpt>
			<trkpt lat="41.800734" lon="-6.703463">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.800634" lon="-6.703795">
				<ele>562.000000</ele>
			</trkpt>
			<trkpt lat="41.800607" lon="-6.704118">
				<ele>564.000000</ele>
			</trkpt>
			<trkpt lat="41.800614" lon="-6.704818">
				<ele>567.000000</ele>
			</trkpt>
			<trkpt lat="41.800607" lon="-6.705178">
				<ele>569.000000</ele>
			</trkpt>
			<trkpt lat="41.800647" lon="-6.705520">
				<ele>570.000000</ele>
			</trkpt>
			<trkpt lat="41.800741" lon="-6.705941">
				<ele>572.000000</ele>
			</trkpt>
			<trkpt lat="41.800862" lon="-6.706300">
				<ele>574.000000</ele>
			</trkpt>
			<trkpt lat="41.801357" lon="-6.706939">
				<ele>578.000000</ele>
			</trkpt>
			<trkpt lat="41.801632" lon="-6.707828">
				<ele>583.000000</ele>
			</trkpt>
			<trkpt lat="41.801665" lon="-6.708214">
				<ele>584.000000</ele>
			</trkpt>
			<trkpt lat="41.801572" lon="-6.708151">
				<ele>584.000000</ele>
			</trkpt>
			<trkpt lat="41.801324" lon="-6.708600">
				<ele>588.000000</ele>
			</trkpt>
			<trkpt lat="41.801303" lon="-6.708763">
				<ele>589.000000</ele>
			</trkpt>
			<trkpt lat="41.801337" lon="-6.709032">
				<ele>592.000000</ele>
			</trkpt>
			<trkpt lat="41.801572" lon="-6.709436">
				<ele>597.000000</ele>
			</trkpt>
			<trkpt lat="41.801692" lon="-6.709903">
				<ele>601.000000</ele>
			</trkpt>
			<trkpt lat="41.801792" lon="-6.710621">
				<ele>603.000000</ele>
			</trkpt>
			<trkpt lat="41.801819" lon="-6.711224">
				<ele>604.000000</ele>
			</trkpt>
			<trkpt lat="41.801765" lon="-6.712679">
				<ele>608.000000</ele>
			</trkpt>
			<trkpt lat="41.801786" lon="-6.713147">
				<ele>609.000000</ele>
			</trkpt>
			<trkpt lat="41.801947" lon="-6.713837">
				<ele>611.000000</ele>
			</trkpt>
			<trkpt lat="41.802061" lon="-6.714350">
				<ele>611.000000</ele>
			</trkpt>
			<trkpt lat="41.802187" lon="-6.714610">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.802442" lon="-6.714889">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.802736" lon="-6.715347">
				<ele>613.000000</ele>
			</trkpt>
			<trkpt lat="41.803092" lon="-6.715904">
				<ele>614.000000</ele>
			</trkpt>
			<trkpt lat="41.803386" lon="-6.716326">
				<ele>615.000000</ele>
			</trkpt>
			<trkpt lat="41.803601" lon="-6.716686">
				<ele>616.000000</ele>
			</trkpt>
			<trkpt lat="41.803882" lon="-6.717377">
				<ele>617.000000</ele>
			</trkpt>
			<trkpt lat="41.804136" lon="-6.718006">
				<ele>618.000000</ele>
			</trkpt>
			<trkpt lat="41.804424" lon="-6.718535">
				<ele>619.000000</ele>
			</trkpt>
			<trkpt lat="41.804672" lon="-6.719040">
				<ele>620.000000</ele>
			</trkpt>
			<trkpt lat="41.804960" lon="-6.719579">
				<ele>620.000000</ele>
			</trkpt>
			<trkpt lat="41.805174" lon="-6.720055">
				<ele>620.000000</ele>
			</trkpt>
			<trkpt lat="41.805268" lon="-6.720225">
				<ele>620.000000</ele>
			</trkpt>
			<trkpt lat="41.805556" lon="-6.720799">
				<ele>618.000000</ele>
			</trkpt>
			<trkpt lat="41.805696" lon="-6.721150">
				<ele>618.000000</ele>
			</trkpt>
			<trkpt lat="41.806005" lon="-6.722147">
				<ele>615.000000</ele>
			</trkpt>
			<trkpt lat="41.806165" lon="-6.722669">
				<ele>614.000000</ele>
			</trkpt>
			<trkpt lat="41.806701" lon="-6.722883">
				<ele>612.000000</ele>
			</trkpt>
			<trkpt lat="41.807310" lon="-6.723208">
				<ele>610.000000</ele>
			</trkpt>
			<trkpt lat="41.808026" lon="-6.723567">
				<ele>607.000000</ele>
			</trkpt>
			<trkpt lat="41.808883" lon="-6.724007">
				<ele>604.000000</ele>
			</trkpt>
			<trkpt lat="41.808991" lon="-6.723961">
				<ele>603.000000</ele>
			</trkpt>
			<trkpt lat="41.809533" lon="-6.722992">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.809874" lon="-6.723288">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.810424" lon="-6.723711">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.810785" lon="-6.724015">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.810946" lon="-6.724195">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.811107" lon="-6.724411">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.811408" lon="-6.724860">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.811576" lon="-6.725112">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812164" lon="-6.725982">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812312" lon="-6.726181">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812553" lon="-6.726558">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812693" lon="-6.726971">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.727160">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812740" lon="-6.727330">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812673" lon="-6.727672">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812559" lon="-6.728005">
				<ele>600.000000</ele>
			</trkpt>
			<trkpt lat="41.812339" lon="-6.728678">
				<ele>599.000000</ele>
			</trkpt>
			<trkpt lat="41.812312" lon="-6.728902">
				<ele>598.000000</ele>
			</trkpt>
			<trkpt lat="41.812332" lon="-6.729145">
				<ele>598.000000</ele>
			</trkpt>
			<trkpt lat="41.812413" lon="-6.729387">
				<ele>597.000000</ele>
			</trkpt>
			<trkpt lat="41.812673" lon="-6.730043">
				<ele>594.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.730385">
				<ele>593.000000</ele>
			</trkpt>
			<trkpt lat="41.812761" lon="-6.730762">
				<ele>592.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.731382">
				<ele>590.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.732001">
				<ele>587.000000</ele>
			</trkpt>
			<trkpt lat="41.812787" lon="-6.732325">
				<ele>584.000000</ele>
			</trkpt>
			<trkpt lat="41.812875" lon="-6.732621">
				<ele>582.000000</ele>
			</trkpt>
			<trkpt lat="41.813001" lon="-6.732856">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.813176" lon="-6.733043">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.813785" lon="-6.733403">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.813932" lon="-6.733538">
				<ele>580.000000</ele>
			</trkpt>
			<trkpt lat="41.813738" lon="-6.733592">
				<ele>576.000000</ele>
			</trkpt>
			<trkpt lat="41.813477" lon="-6.733609">
				<ele>572.000000</ele>
			</trkpt>
			<trkpt lat="41.813316" lon="-6.733699">
				<ele>568.000000</ele>
			</trkpt>
			<trkpt lat="41.813169" lon="-6.733906">
				<ele>562.000000</ele>
			</trkpt>
			<trkpt lat="41.813035" lon="-6.733996">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812927" lon="-6.734022">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812828" lon="-6.733951">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812821" lon="-6.733996">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812908" lon="-6.734167">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812941" lon="-6.734248">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812921" lon="-6.734284">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812875" lon="-6.734284">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812767" lon="-6.734148">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.734148">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812720" lon="-6.734248">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812734" lon="-6.734401">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812801" lon="-6.734508">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812854" lon="-6.734598">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812901" lon="-6.735101">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812915" lon="-6.735227">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812895" lon="-6.735343">
				<ele>560.000000</ele>
			</trkpt>
			<trkpt lat="41.812727" lon="-6.735595">
				<ele>563.000000</ele>
			</trkpt>
			<trkpt lat="41.812633" lon="-6.735846">
				<ele>567.000000</ele>
			</trkpt>
			<trkpt lat="41.812573" lon="-6.736017">
				<ele>569.000000</ele>
			</trkpt>
			<trkpt lat="41.812413" lon="-6.736251">
				<ele>571.000000</ele>
			</trkpt>
			<trkpt lat="41.812198" lon="-6.736529">
				<ele>574.000000</ele>
			</trkpt>
			<trkpt lat="41.812050" lon="-6.736646">
				<ele>575.000000</ele>
			</trkpt>
			<trkpt lat="41.811816" lon="-6.736817">
				<ele>577.000000</ele>
			</trkpt>
			<trkpt lat="41.811783" lon="-6.736934">
				<ele>578.000000</ele>
			</trkpt>
			<trkpt lat="41.811783" lon="-6.737131">
				<ele>579.000000</ele>
			</trkpt>
			<trkpt lat="41.811736" lon="-6.737238">
				<ele>579.000000</ele>
			</trkpt>
			<trkpt lat="41.811622" lon="-6.737418">
				<ele>581.000000</ele>
			</trkpt>
			<trkpt lat="41.811689" lon="-6.737796">
				<ele>584.000000</ele>
			</trkpt>
			<trkpt lat="41.811783" lon="-6.738020">
				<ele>586.000000</ele>
			</trkpt>
			<trkpt lat="41.811837" lon="-6.738219">
				<ele>587.000000</ele>
			</trkpt>
			<trkpt lat="41.811823" lon="-6.738389">
				<ele>589.000000</ele>
			</trkpt>
			<trkpt lat="41.811736" lon="-6.738722">
				<ele>591.000000</ele>
			</trkpt>
			<trkpt lat="41.811488" lon="-6.739053">
				<ele>592.000000</ele>
			</trkpt>
			<trkpt lat="41.811053" lon="-6.739611">
				<ele>595.000000</ele>
			</trkpt>
			<trkpt lat="41.810812" lon="-6.740303">
				<ele>598.000000</ele>
			</trkpt>
			<trkpt lat="41.810464" lon="-6.741039">
				<ele>601.000000</ele>
			</trkpt>
			<trkpt lat="41.810002" lon="-6.742314">
				<ele>607.000000</ele>
			</trkpt>
			<trkpt lat="41.809419" lon="-6.742144">
				<ele>609.000000</ele>
			</trkpt>
			<trkpt lat="41.808917" lon="-6.742117">
				<ele>611.000000</ele>
			</trkpt>
			<trkpt lat="41.808362" lon="-6.742297">
				<ele>616.000000</ele>
			</trkpt>
			<trkpt lat="41.808020" lon="-6.742503">
				<ele>619.000000</ele>
			</trkpt>
			<trkpt lat="41.807404" lon="-6.743024">
				<ele>627.000000</ele>
			</trkpt>
			<trkpt lat="41.806553" lon="-6.743177">
				<ele>636.000000</ele>
			</trkpt>
			<trkpt lat="41.806071" lon="-6.743356">
				<ele>642.000000</ele>
			</trkpt>
			<trkpt lat="41.805355" lon="-6.744488">
				<ele>653.000000</ele>
			</trkpt>
			<trkpt lat="41.805081" lon="-6.744964">
				<ele>655.000000</ele>
			</trkpt>
			<trkpt lat="41.804926" lon="-6.745243">
				<ele>657.000000</ele>
			</trkpt>
			<trkpt lat="41.804812" lon="-6.745441">
				<ele>658.000000</ele>
			</trkpt>
			<trkpt lat="41.804786" lon="-6.745530">
				<ele>659.000000</ele>
			</trkpt>
			<trkpt lat="41.804745" lon="-6.745584">
				<ele>659.000000</ele>
			</trkpt>
			<trkpt lat="41.804719" lon="-6.745620">
				<ele>659.000000</ele>
			</trkpt>
			<trkpt lat="41.804658" lon="-6.745656">
				<ele>660.000000</ele>
			</trkpt>
			<trkpt lat="41.804532" lon="-6.745693">
				<ele>661.000000</ele>
			</trkpt>
			<trkpt lat="41.804491" lon="-6.745961">
				<ele>660.000000</ele>
			</trkpt>
			<trkpt lat="41.804458" lon="-6.746204">
				<ele>661.000000</ele>
			</trkpt>
			<trkpt lat="41.804525" lon="-6.746788">
				<ele>664.000000</ele>
			</trkpt>
			<trkpt lat="41.804719" lon="-6.747578">
				<ele>668.000000</ele>
			</trkpt>
			<trkpt lat="41.804866" lon="-6.748081">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.804799" lon="-6.748037">
				<ele>670.000000</ele>
			</trkpt>
			<trkpt lat="41.804592" lon="-6.747875">
				<ele>673.000000</ele>
			</trkpt>
			<trkpt lat="41.804371" lon="-6.747785">
				<ele>676.000000</ele>
			</trkpt>
			<trkpt lat="41.804056" lon="-6.747714">
				<ele>681.000000</ele>
			</trkpt>
			<trkpt lat="41.804009" lon="-6.747722">
				<ele>681.000000</ele>
			</trkpt>
			<trkpt lat="41.803956" lon="-6.747758">
				<ele>682.000000</ele>
			</trkpt>
			<trkpt lat="41.803828" lon="-6.747920">
				<ele>685.000000</ele>
			</trkpt>
			<trkpt lat="41.803447" lon="-6.748324">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803453" lon="-6.748433">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803453" lon="-6.748450">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803467" lon="-6.748467">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803534" lon="-6.748611">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803621" lon="-6.748791">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803721" lon="-6.749033">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.803774" lon="-6.749133">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804063" lon="-6.748872">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804096" lon="-6.748980">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804110" lon="-6.749033">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804116" lon="-6.749060">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804116" lon="-6.749096">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804223" lon="-6.749096">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804270" lon="-6.749087">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804270" lon="-6.749232">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804263" lon="-6.749232">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804263" lon="-6.749240">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804270" lon="-6.749412">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804270" lon="-6.749420">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804257" lon="-6.749420">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804257" lon="-6.749402">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804250" lon="-6.749402">
				<ele>690.000000</ele>
			</trkpt>
			<trkpt lat="41.804250" lon="-6.749295">
				<ele>690.000000</ele>
			</trkpt>
		</trkseg>
	</trk>
</gpx>
"""

# Parse do GPX
gpx = gpxpy.parse(gpx_str)

# Extrair pontos e elevações
pontos = []
for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
            pontos.append({
                'lat': point.latitude,
                'lon': point.longitude,
                'ele': point.elevation
            })

# Função Haversine para calcular distância entre dois pontos (em km)
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # raio da Terra em km
    dlat = np.radians(lat2 - lat1)
    dlon = np.radians(lon2 - lon1)
    a = np.sin(dlat/2)**2 + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dlon/2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1-a))
    return R * c

# Calcular distâncias acumuladas
distancias = [0]
for i in range(1, len(pontos)):
    d = haversine(pontos[i-1]['lat'], pontos[i-1]['lon'],
                  pontos[i]['lat'], pontos[i]['lon'])
    distancias.append(distancias[-1] + d)

elevacoes = [p['ele'] for p in pontos]

# Criar figura com tamanho 1000x200 (em polegadas, com dpi=100 para ter 1000x200 pixels)
fig, ax = plt.subplots(figsize=(10, 2), dpi=100)  # 10*100 = 1000px, 2*100 = 200px
ax.set_xlim(0, max(distancias))
ax.set_ylim(min(elevacoes), max(elevacoes))

# Preencher área sob a linha com cor rosa semi-transparente (simula gradiente)
ax.fill_between(distancias, elevacoes, min(elevacoes), color='#c18182', alpha=0.3)

# Desenhar linha superior
ax.plot(distancias, elevacoes, color='#c18182', linewidth=3)

# Remover eixos e margens para ficar apenas o gráfico (como no exemplo)
ax.axis('off')
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

# Guardar como SVG
plt.savefig('perfil_elevacao.svg', format='svg', transparent=True)
print("SVG gerado: perfil_elevacao.svg")